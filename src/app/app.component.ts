import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http, Request, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tweets: any[];

  constructor(
    public http: Http
  ) { }

  getTweets(search: string) {
    const headers = new Headers();
    const body = new URLSearchParams();
    body.append('query', search);
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:8080/api/search', body, { headers: headers })
      .subscribe((res: any) => {
        res = JSON.parse(res._body);
        if (res.data && res.data.length > 0) {
          this.tweets = res.data;
        }
      });
  }

  delete(i) {
    this.tweets.splice(i, 1);
  }
}
