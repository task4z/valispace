import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  @Input() title;
  @Input() message;
  @Input() cancel;
  @Input() ok;

  constructor(public activeModal: NgbActiveModal) { }

  public close() {
    this.activeModal.close();
  }

  public submit() {
    this.activeModal.close({success: true});
  }
}
