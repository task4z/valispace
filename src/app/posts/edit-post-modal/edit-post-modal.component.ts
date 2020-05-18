import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post-modal',
  templateUrl: './edit-post-modal.component.html',
  styleUrls: ['./edit-post-modal.component.scss']
})
export class EditPostModalComponent implements OnInit {

  @Input() post: Post;

  public fg: FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private fb: FormBuilder) {
    this.fg = fb.group({comment: ['', Validators.required]});
  }

  ngOnInit() {
    if (!this.post) {
      return;
    }
    this.fg = this.fb.group({comment: [this.post.comment, Validators.required]});
  }

  public close() {
    this.activeModal.close();
  }

  public submit() {
    this.activeModal.close({success: true, value: {...this.post, comment: this.fg.value.comment, date: new Date().toISOString()}});
  }
}
