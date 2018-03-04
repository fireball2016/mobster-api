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
  myData: any = [];

  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    this.http.get(this.url).subscribe((res) => {
      this.myData = res;
      console.log(res);
    });
  }


}
