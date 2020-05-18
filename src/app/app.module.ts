import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorComponent } from './error/error.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { NewEmployeeModalComponent } from './admin/new-employee-modal/new-employee-modal.component';
import { UpdateEmployeeModalComponent } from './admin/update-employee-modal/update-employee-modal.component';
import { ErrorInterceptor } from './error/error.interceptor';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { AutocompleteComponent } from './posts/autocomplete/autocomplete.component';
import { EditPostModalComponent } from './posts/edit-post-modal/edit-post-modal.component';
import { MentionModule } from 'angular-mentions';
import { EmployeeComponent } from './posts/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PostsComponent,
    ErrorComponent,
    NewPostComponent,
    NewEmployeeModalComponent,
    UpdateEmployeeModalComponent,
    ConfirmationModalComponent,
    AutocompleteComponent,
    EditPostModalComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MentionModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  entryComponents: [
    UpdateEmployeeModalComponent,
    ConfirmationModalComponent,
    EditPostModalComponent,
    NewEmployeeModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
