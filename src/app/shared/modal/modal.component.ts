import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalId = '';

  constructor(
    public modal: ModalService
  ) {
  }

  ngOnInit(): void {
  }

  public closeModal(): void {
    this.modal.toggleModal(this.modalId);
  }

}
