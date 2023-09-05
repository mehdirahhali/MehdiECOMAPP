import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-full-bill',
  templateUrl: './full-bill.component.html',
  styleUrls: ['./full-bill.component.css']
})
export class FullBillComponent {
    fullBill: any
    billId!: number
    totalAmount: number = 0
    constructor(private http: HttpClient, private route: ActivatedRoute) {
      this.billId = this.route.snapshot.params["billId"]
    }

    ngOnInit(){
      this.http.get(`http://localhost:8888/BILLING-SERVICE/full-bill/${this.billId}`)
        .subscribe({
          next: data => {
            this.fullBill = data
            for(let prodItem of this.fullBill.productItems)
              this.totalAmount += prodItem.product.price * prodItem.discount * prodItem.quantity
          },
          error: err => console.error(err)
        })
    }
}
