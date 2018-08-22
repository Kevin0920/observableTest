import { Component, OnInit } from '@angular/core';
import { MainService } from "./../main.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  user: string;
  constructor(private _service: MainService) { }

  ngOnInit() {
    this._service.cast.subscribe(data => this.user = data)
    
    // this._service.getUser()
  }

}
