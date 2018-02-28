import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NameofAllahProvider} from '../../providers/nameof-allah/nameof-allah';
import {NameOfAllah} from "../../model/name";
import {DetailspagePage} from '../detailspage/detailspage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nameoCategory : NameOfAllah[];
  /*rows: any;
  public searchQuery;*/

  constructor(public navCtrl: NavController, public nameService : NameofAllahProvider) {
    //this.searchQuery = '';
    this.ionViewDidLoad();
  }
  /*details page*/
  nav(_99name){
    this.navCtrl.push(DetailspagePage,{
      'value':_99name
    });
    console.log(_99name);
  }

  ionViewDidLoad()  {
    this.nameService.getNames()
      .subscribe(nameofAllah => {
          this.nameoCategory = nameofAllah
          //this.rows = Array.from(Array(Math.ceil(nameofAllah.length / 3)).keys());
        },
        error => console.log(error));
  }
  /*getItems(ev) {
    // Reset items back to all of the items
    this.ionViewDidLoad();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.nameoCategory = this.nameoCategory.filter((nameCat) => {
        if (nameCat.nameoCategory.toLowerCase().indexOf(val.toLowerCase()) > -1)
        {
          return true;
        }

        // return (nameCat.toString().toUpperCase().indexOf(nameCat.toString().toUpperCase())>-1);
      })
    }
  }*/

}
