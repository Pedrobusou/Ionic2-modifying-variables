import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() { }

  closeModal() {
    let data = {
      title: "hello",
      message: "how r u?"
    };

    this.viewCtrl.dismiss(data);
  }
}
