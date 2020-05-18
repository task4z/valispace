import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  @Input() id;
  @Input() field;

  public employee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployee();
  }

  private getEmployee() {
    this.employeeService.getEmployees().pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.employee = res.find(e => e.id === this.id));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
