import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

setRootPageToHome():void{
  this.navCtrl.setRoot('HomePage');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }

}
