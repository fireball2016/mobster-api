import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: any = {};
  url = 'http://localhost:3000/api/mobsters';
  // proxyurl = 'https://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) {
    // console.log('Hellow user');
    // this.getMobsters();
    // this.getData();
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(data => {
      console.log(data); });
  }
  // getData() {
  //   return this.http.get(this.apiUrl).map((res: Response) => res.json());
  // }

  // getMobsters() {
  //   this.getData().subscribe(data => {
  //     console.log(data);
  //     this.data = data; });
  // }


}
