import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { BehaviorSubject } from 'rxjs';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';


const allInfo = 'assets/json/products.json';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // private user = new BehaviorSubject<string>('John');
  // cast = this.user.asObservable();

  constructor(private _http: Http) { }

  list() {
    return this._http.get(allInfo).pipe(map(response => response.json()));
  }

  // editUser(newUser) {
  //   this.user.next(newUser);
  // }

}
