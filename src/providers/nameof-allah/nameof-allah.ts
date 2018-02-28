import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {NameOfAllah} from '../../model/name';
/*
  Generated class for the NameofAllahProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NameofAllahProvider {

  constructor(public http: Http) {
    console.log('Name of Allah');
  }
  getNames() : Observable<NameOfAllah[]>{
    return this.http.get('assets/data.json')
      .map((response:Response) => <NameOfAllah[]>response.json().results)
      .catch(this.catchError);
  }
  catchError(error:Response){
    return Observable.throw(error.json().error || 'Server error');
  }

}
