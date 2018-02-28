import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailspage',
  templateUrl: 'detailspage.html',
})
export class DetailspagePage {
  _99name;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._99name=this.navParams.get('value')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailspagePage');
  }

}
