import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Post, PostWithComments } from '../models/post.model';
import { takeUntil } from 'rxjs/operators';
import { PostService } from '../services/post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPostModalComponent } from './edit-post-modal/edit-post-modal.component';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  public posts: PostWithComments[];
  private employees: Employee[];

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private postService: PostService,
              private employeeService: EmployeeService,
              private modalService: NgbModal,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getPosts();
    this.getEmployees();
  }

  public addPost(post: PostWithComments): void {
    post.comment = this.employeeService.transformCommentToSend(post.comment);
    this.postService.addPost(post).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.toastr.success(`Post successfully added.`, 'Success!');
      this.getPosts();
    });
  }

  private getPosts(): void {
    this.postService.getPosts().pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.posts = res.map( post => {
        post = this.postService.treatPost(post);
        return post;
      });
      this.posts = this.posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }

  private getEmployees() {
    this.employeeService.getEmployees().pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.employees = res);
  }

  public removePost(post: PostWithComments): void {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.title = 'Delete post';
    modalRef.componentInstance.message = `Are you sure you want to delete post?`;

    modalRef.result.then(res => {
      if (res.success) {
        this.postService.removePost(post).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
          this.toastr.success(`Post successfully deleted.`, 'Success!');
          this.getPosts();
        });
      }
    })
    .catch(() => {});
  }

  public openModalEdit(post: PostWithComments) {
    const modalRef = this.modalService.open(EditPostModalComponent);
    let postText = '';
    post.comments.forEach(element => {
      let res = element.comment;
      if (element.id) {
        if (element.field === 'username') {
          res = '@' + this.employees.find( e => e.id === element.id).username;
        }
        if (element.field === 'phone') {
          res = '#' + this.employees.find( e => e.id === element.id).phone;
        }
      }
      postText += res;
    });
    post.comment = postText;
    modalRef.componentInstance.post = post;

    modalRef.result.then(res => {
      if (res && res.success) {
        res.value.comment = this.employeeService.transformCommentToSend(res.value.comment);
        this.postService.updatePost(res.value).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
          this.toastr.success(`Post successfully updated`, 'Success!');
          this.getPosts();
        });
      }
    })
    .catch(() => {});
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
