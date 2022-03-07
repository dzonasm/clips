import {Injectable} from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {
  }

  register(id: string): void {
    this.modals.push({
      id,
      visible: false
    });
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((el: IModal) => el.id === id)?.visible;
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((el: IModal) => el.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }

  }
}
