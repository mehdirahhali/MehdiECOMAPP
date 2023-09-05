import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./services/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecom-web-app';
  constructor(public secService : SecurityService) { }
  public async ngOnInit() {
  }
  onLogout() {
    this.secService.kcService.logout("http://localhost:4200/")
      .then(value=>{
        console.log(value);
      });
  }
  async login(){
    await this.secService.kcService.login({
      redirectUri: window.location.origin
    });
  }
}
