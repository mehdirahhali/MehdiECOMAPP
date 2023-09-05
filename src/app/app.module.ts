import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from "@angular/common/http";
import { CustomersComponent } from './customers/customers.component';
import { BillComponent } from './bill/bill.component';
import { FullBillComponent } from './full-bill/full-bill.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

export function kcFactory(kcSecService : KeycloakService){
  return ()=>{
    console.log("Keycloak Initialization ...")
    kcSecService.init({
      config : {
        url : "http://localhost:8080",
        realm : "ecom-realm",
        clientId : "ecom-client"
      },
      loadUserProfileAtStartUp : true,
      initOptions : {
        onLoad : 'check-sso',
        checkLoginIframe : true
      }
    });
  }
}
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    BillComponent,
    FullBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {provide : APP_INITIALIZER, deps : [KeycloakService], useFactory : kcFactory, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
