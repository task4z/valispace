import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-employee-modal',
  templateUrl: './new-employee-modal.component.html',
  styleUrls: ['./new-employee-modal.component.scss']
})
export class NewEmployeeModalComponent implements OnInit, OnDestroy {

  public fg: FormGroup;
  private unsubscribe$: Subject<void> = new Subject<void>();

  public roles = [
    '',
    'CEO',
    'Designer',
    'Developer',
    'Sales',
    'PR',
  ];
  private employees: Employee[];

  constructor(public activeModal: NgbActiveModal,
              private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit() {
    this.employeeService.getEmployees().pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.employees = res);
    this.fg = this.fb.group({
      username: ['', [ Validators.required, Validators.pattern(/^[\w-_]+$/)]],
      phone: ['', [Validators.required, this.UniquePhoneValidator()]],
      role: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  private UniquePhoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let res = null;
      if (control.value !== undefined && (isNaN(control.value))) {
        return null;
      }
      if (this.employees.length > 0 && control.value) {
        let phoneUnique = this.employees.filter(emp => emp.phone === control.value);
        if (phoneUnique.length > 0) {
          res = {'NumberUnique': true};
        }
      }
      return res;
    };
  }

  public close(): void {
    this.activeModal.close({ success: false, value: this.fg.value});
  }

  public submit(): void {
    if (this.fg.valid) {
      this.activeModal.close({success: true, value: this.fg.value});
    }
  }

}

