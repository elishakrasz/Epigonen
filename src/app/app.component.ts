import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgUrl = 'https://cdn.theculturetrip.com/wp-content/uploads/2016/09/krasznahorkai-e1474888450730-461x650.jpg';
  // private apiUrl = 'http://localhost:5000/api/values';
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  // private apiUrl = 'http://localhost:5000/api/makes';
  data: any = {};

  // constructor(private http: Http) {
  //   console.log('Hello fellow user');
  //   this.getContacts();
  //   this.getData();
  // }

  // getData() {
  //   return this.http.get(this.apiUrl)
  //     .map((res: Response) => res.json());
  // }

  // getContacts() {
  //   this.getData().subscribe(data => {
  //     this.data = data;
  //     console.log(data);
  //   });

  constructor(private http: Http) {
    http.get(this.apiUrl)
      .subscribe(res => {
        this.data = res.json();
        console.log(this.data);
      });
  }
}
