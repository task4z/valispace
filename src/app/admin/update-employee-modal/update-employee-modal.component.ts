import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/services/employee.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-update-employee-modal',
  templateUrl: './update-employee-modal.component.html',
  styleUrls: ['./update-employee-modal.component.scss']
})
export class UpdateEmployeeModalComponent implements OnInit {

  @Input() public employee;
  public fg: FormGroup;

  private employees: Employee[];
  private unsubscribe$: Subject<void> = new Subject<void>();

  public roles = [
    '',
    'CEO',
    'Designer',
    'Developer',
    'Sales',
    'PR',
  ];

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
    if (!this.employee) {
      return;
    }
    this.fg = this.fb.group({
      id: [this.employee.id],
      username: [this.employee.username, [ Validators.required, Validators.pattern(/^[\w-_]+$/)]],
      phone: [this.employee.phone, [Validators.required, this.UniquePhoneValidator()]],
      role: [this.employee.role, Validators.required],
      name: [this.employee.name, Validators.required],
    });
  }

  private UniquePhoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let res = null;
      if (control.value !== undefined && (isNaN(control.value))) {
        return null;
      }
      if (this.employees.length > 0 && control.value && this.fg && this.fg.controls && this.fg.controls.id && this.fg.controls.id.value ) {
        let phoneUnique = this.employees.filter(emp => emp.phone === control.value && emp.id !== this.fg.controls.id.value);
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
    this.activeModal.close({success: true, value: this.fg.value});
  }

}
