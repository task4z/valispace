import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {

  @Output() public add: EventEmitter<Post> = new EventEmitter();
  public fg: FormGroup;

  constructor(fb: FormBuilder,
              public postService: PostService) {
    this.fg = fb.group({comment: ['', Validators.required]});
  }

  public emit() {
    this.add.emit({
      id: null,
      comment: this.fg.value.comment,
      date: new Date().toISOString()
    });
    this.fg.markAsUntouched();
    this.fg.controls.comment.setValue('');
  }

}
