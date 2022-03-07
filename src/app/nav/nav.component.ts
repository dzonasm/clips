import {Component, OnInit} from '@angular/core';
import {ModalService} from '../services/modal.service';
import {MODAL_ID} from '../shared/enums/modal-id.enum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modal: ModalService) {
  }

  ngOnInit(): void {
  }

  public openModal(event: Event): void {
    event.preventDefault();

    this.modal.toggleModal(MODAL_ID.AUTH);
  }
}
