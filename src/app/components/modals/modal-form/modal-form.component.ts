import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ApiService } from 'src/app/services/api/api.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';
import { UserData } from 'src/app/interfaces/common-interface';


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
  standalone: false
})


export class ModalFormComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  presentingElement!: HTMLElement | null;
  cardTitle: string = 'RSVP now';
  isUserValid: boolean = false;

  constructor(
    private api: ApiService,
    private toastController: ToastController,
    private graphql: GraphqlService,
  ) { }


  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  ans!: string;
  name!: string;
  userData = <UserData>{};
  selectedButton: string = '';

  ngOnInit() {
    // this.presentingElement = document.querySelector('.ion-page');

  }

  clearModal() {
    this.userData = <UserData>{};
    this.isUserValid = false;
    this.name = "";
    this.cardTitle = 'RSVP now';
    this.selectedButton = '';
  }

  selectButton(button: string) {
    this.selectedButton = button;
  }


  cancel() {
    this.clearModal();
    this.modal.dismiss(null, 'cancel');
    // this.modal.onDidDismiss()
  }

  // onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
  //   if (event.detail.role === 'confirm') {
  //     this.message = `Hello, ${event.detail.data}!`;
  //   }
  // }

  async presentToast(msg: string,) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000,
      position: 'bottom',
    });

    await toast.present();
  }

  /**
   * Submit the answer of the user
   */
  confirm() {
    let userAnswers: UserData = {
      id: this.userData.id,
      name: this.userData.name,
      attend: this.selectedButton === 'yes',
    }

    console.log(userAnswers)

    this.graphql.save(userAnswers).subscribe(({ data }) => {
      this.presentToast(data.save)
      this.modal.dismiss();
    });

  }

  /**
   * Check if the user is invited in the RSVP
   */
  submit() {
    if (this.name != undefined) {
      this.graphql.getUsers(this.name).subscribe((data) => {
        this.userData = data.user;
        let message = this.userData != null ? `You are invited "${this.userData.name}"` : 'User not found';
        this.isUserValid = this.userData != null;
        this.cardTitle = this.isUserValid ? `"${this.userData.name}"` : 'RSVP now';

        this.presentToast(message);

      });
    }

  }

}
