import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  bills: any
  customerId!: number   // le ! c'est pour ne pas initialise l'attribut  (ex: customerId: number = 0)

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.customerId = this.route.snapshot.params['customerId']
  }
  ngOnInit(){
    this.http
      .get(`http://localhost:8888/BILLING-SERVICE/bills/search/byCustomerId?projection=fullBill&customerId=${this.customerId}`)
      .subscribe({
        next: data => this.bills = data,
        error: err =>  console.log(err)
      })
  }

  getFullBill(bill: any) {
    this.router.navigateByUrl(`bills/fullBill/${bill.id}`)
  }
}
