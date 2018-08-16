import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from "./../main.service";
import { ProductItem } from '../oop/products';
 
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {
  private getAllProds: any;
  productList: [ProductItem];

  user: string;
  editUser: string;

  txtName: string;

  contactList: any;

  constructor(private _service: MainService) { }

  ngOnInit() {
    this.getAllProds = this._service.list().subscribe(data => {
      this.productList = data as [ProductItem];
      console.log(this.productList);

      // this._service.cast.subscribe(user => this.user = user);
      
      this.contactList = [
        { name: 'kevin' },
        { name: 'lisa' }
      ]
    }) 
  }

  addContact() {
    console.log(this.txtName);
    this.contactList.push(
      { name: this.txtName }
    )
   
  }

  deleteContact(name) {
    console.log(name);
    for (let i = 0; i < this.contactList.length; i++) {
      if (this.contactList[i]["name"] == name) {
        this.contactList.splice(i, 1);
      }
      
    }
  } 


  // editTheUser() {
  //   this._service.editUser(this.editUser);
  // }
  
  ngOnDestroy() {
    this.getAllProds.unsubscribe()
  }

}
