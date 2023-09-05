import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
    customers: any

    constructor(private http: HttpClient, private router: Router) {
    }
    ngOnInit(){
      this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers")
          .subscribe({
            next: data => this.customers = data,
            error: err =>  console.log(err)
          })
    }

  getBills(c: any) {
    this.router.navigateByUrl(`/bills/${c.id}`)
  }
}
