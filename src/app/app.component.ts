import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name:string = '';

  constructor(private httpClient:HttpClient) { }

  onNameKeyUp(event:any) {
        this.name = event.target.value;
      }
      getProfile() {
        //console.log(this.name);
        this.httpClient.get(`https://jsonplaceholder.typicode.com/users/?name=${this.name}`)
        .subscribe(
          (data:any[]) => {
            console.log(data);
          }
        )
      }
}
