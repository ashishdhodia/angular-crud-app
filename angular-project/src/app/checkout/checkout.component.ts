import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private getJson: DataStorageService) { }
  recData: any
  price = 0
  data: any
  dataForRm: any


  onPost() {
    let id = Math.floor(Math.random() * 1000000000)
    var time = new Date();
    this.data = { "id": id, "transactionAmount": this.recData[0].price, "time": time.toLocaleString() }
    console.log(this.data);
    this.getJson.postTransaction(this.data).subscribe((data) => {
      // console.log(data);
      // window.location.reload()
    });

    this.getJson.putCartPrice({ "id": 1, "price": 0 }).subscribe((data) => {
      // console.log(data);
    });

    this.getJson.getDataCart().subscribe((data) => {
      this.dataForRm = data;
      // console.log(data);
      let len = this.dataForRm.length;
      for (let i = 0; i < len; i++) {
        this.getJson.deleteDataCart(this.dataForRm[i].id).subscribe((data) => {
          // console.log(data)
        }
        )
      }
    });


  }

  ngOnInit(): void {
    this.getJson.getCartPrice().subscribe((data) => {
      // console.log(data)
      this.recData = data;
      // console.log(this.recData[0].price)
      this.price = this.recData[0].price
    });
  }


}
