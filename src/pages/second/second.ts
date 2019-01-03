import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  message: string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.message = this.navParams.get('message');
    //alert(this.message);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateToThirdPage() {
    this.navCtrl.push('ThirdPage');
  }

}
