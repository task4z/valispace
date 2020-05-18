import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { of, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employees: Employee[];
  private gotData = false;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    if (!this.gotData) {
      return this.http.get<Employee[]>('../../assets/employees.json').pipe(
        shareReplay(1),
        map( response => {
          this.gotData = true;
          this.employees = response;
          return response;
        }));
    } else {
      return of(this.employees).pipe(shareReplay(1));
    }
  }

  public addEmployee(employee: Employee): Observable<boolean> {
    employee = {
      ...employee,
      id: this.employees && this.employees.length ? this.employees.sort((a, b) => b.id - a.id)[0].id + 1 : 1};
    this.employees.push(employee);
    return of(true);
  }

  public removeEmployee(employee: Employee): Observable<boolean> {
    this.employees = this.employees.filter(existentEmployee => existentEmployee.id !== employee.id);
    return of(true);
  }

  public updateEmployee(employee: Employee): Observable<boolean> {
    this.employees = this.employees.map(existentEmployee => {
      if(existentEmployee.id === employee.id) {
        existentEmployee = employee;
      }
      return existentEmployee;
    });
    return of(true);
  }

  public transformCommentToSend(comment) {
    this.employees.forEach( emp => {
      if (comment.indexOf(`@${emp.username} `) > -1 || comment.indexOf(`#${emp.username}`)+`#${emp.username}`.length === comment.length ) {
        comment = comment.split(`@${emp.username}`).join(`<employee id="${emp.id}" field="username"></employee>`);
      }
      if (comment.indexOf(`#${emp.phone} `) > -1 || comment.indexOf(`#${emp.phone}`)+`#${emp.phone}`.length === comment.length ) {
        comment = comment.split(`#${emp.phone}`).join(`<employee id="${emp.id}" field="phone"></employee>`);
      }
    });
    return comment;
  }

}
