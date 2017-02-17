import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nameChild= '';
  nameMember= '';
  constructor(private http: Http) {

  }
  title = 'app works!';
  
  ngOnInit() {
    this.http.get('http://localhost:1337/member').map(res => res.json()).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }

  addMember() {
    this.http.post('http://localhost:1337/member', {
      name: this.nameMember
    }).map(res => res.json()).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }

  addChild() {
    this.http.post(`http://localhost:1337/member/1/addchild`, {
      child : {
        name: this.nameChild
      }
    }).map(res => res.json()).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }
}
