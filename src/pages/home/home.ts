import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qty: number = 1;
  text: string = "Pedro";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  toSecondPage() {
    let modal = this.modalCtrl.create(SecondPage);

    modal.onDidDismiss((data) => {
      console.log(data);
    });
    modal.present();
  }

  incrementQty() {
    this.qty += 1;
    console.log(this.qty);
  }

  decrementQty() {
    if (this.qty - 1 < 1) {
      this.qty = 1
    } else {
      this.qty -= 1;
    }
  }

  updateName() {

  }
}
