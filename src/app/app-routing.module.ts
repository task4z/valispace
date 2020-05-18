import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
