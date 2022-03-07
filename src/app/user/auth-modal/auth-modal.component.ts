import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {MODAL_ID} from '../../shared/enums/modal-id.enum';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {
  MODAL_ID = MODAL_ID;
  constructor(
    public modal: ModalService
  ) {
  }

  ngOnInit(): void {
    this.modal.register(MODAL_ID.AUTH);
  }

}
