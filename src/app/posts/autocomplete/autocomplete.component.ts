import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnDestroy, OnInit {

  @Input() parentForm: FormGroup;
  @Input() buttonVisible: boolean;

  private unsubscribe$: Subject<void> = new Subject<void>();

  private listEmployees: Employee[];
  public mentionConfig = {};

  constructor(private empoyeesService: EmployeeService) {
  }

  ngOnInit() {
    this.empoyeesService.getEmployees().pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.getData(res));
  }

  public getData(employees: Employee[]) {
    this.listEmployees = employees;
    this.mentionConfig = {
      mentions: [
        {
            items: this.listEmployees.map(e => e.username),
            triggerChar: '@'
        },
        {
            items: this.listEmployees.map(e => e.phone),
            triggerChar: '#'
        },
      ]
    };
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
