import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateEmployeeModalComponent } from './update-employee-modal/update-employee-modal.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ToastrService } from 'ngx-toastr';
import { NewEmployeeModalComponent } from './new-employee-modal/new-employee-modal.component';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  public employees: Employee[];
  private posts: Post[];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private employeeService: EmployeeService,
              private postService: PostService,
              private modalService: NgbModal,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getEmployees();
    this.getPosts();
  }

  private getEmployees() {
    this.employeeService.getEmployees().pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.employees = res);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public editEmployee(employee: Employee): void {
    const modalRef = this.modalService.open(UpdateEmployeeModalComponent);
    modalRef.componentInstance.employee = employee;

    modalRef.result.then(res => {
      if (res.success) {
        this.saveEmployee(res.value);
        this.toastr.success(`Employee ${employee.name} successfully updated`, 'Success!');
      }
    })
    .catch(() => {});
  }

  public addEmployee(): void {
    const modalRef = this.modalService.open(NewEmployeeModalComponent);

    modalRef.result.then(res => {
      if (res.success) {
        this.addEmployeeInService(res.value);
        this.toastr.success(`Employee ${res.value.name} successfully added`, 'Success!');
      }
    })
    .catch(() => {});
  }

  private addEmployeeInService(employee: Employee): void {
    this.employeeService.addEmployee(employee)
      .subscribe(() => {
        this.getEmployees();
      });
  }

  private saveEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee)
      .subscribe(() => {
        this.getEmployees();
      });
  }

  private getPosts() {
    this.postService.getPosts().pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.posts = res;
    });
  }

  public deleteEmployee(employee: Employee): void {
    let exist = false;
    this.posts.forEach(post => {
      if (post.comment.includes(`id="${employee.id}"`)) {
        this.toastr.error(`Employee ${employee.name} is associated in posts, please delete the post where it is mentioned first`,
        'Post dependency!');
        exist = true;
      }
    });
    if (!exist) {
      this.openModalDelete(employee);
    }
  }

  private openModalDelete(employee: Employee): void {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.title = 'Delete employee';
    modalRef.componentInstance.message = `Are you sure you want to delete employee ${employee.name}?`;

    modalRef.result.then(res => {
      if (res.success) {
        this.employeeService.removeEmployee(employee)
        .subscribe(() => {
          this.toastr.success(`Employee ${employee.name} successfully deleted`, 'Success!');
          this.getEmployees();
        });
      }
    })
    .catch(() => {});
  }

}
