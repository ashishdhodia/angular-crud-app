import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private getJson: DataStorageService) { }

  recData: any
  // qty = 0
  totalCost = 0
  fieldsForTable = [
    "Product Name",
    "Product Category",
    "Units Available",
    "Quantity Added",
    "Base Price",
    "Price",
    "Add More",
    "Remove"
  ]

  onDelete(id: any) {
    this.getJson.deleteDataCart(id).subscribe((data) => {
      // console.log(data)
      window.location.reload()
    });
  }

  updateQuantity(pid: any) {
    let len = this.recData.length;
    for (let i = 0; i < len; i++) {
      if (this.recData[i].id == pid) {
        // console.log(this.recData[i]);
        let temp = parseInt(this.recData[i].quantity)
        this.recData[i].price = (temp * (this.recData[i].originalPrice))

        this.getJson.putDataCart(this.recData[i], pid).subscribe((data) => {
          // console.log(data)
          // setTimeout(this.timeOut, 1500)
        });

      }
    }

    this.totalCost = 0
    for (let i = 0; i < len; i++) {
      this.totalCost = this.recData[i].price + this.totalCost
    }

    // this.getJson.postCartrPrice({ "id": 1, "price": this.totalCost }).subscribe((data) => {
    //   console.log(data);
    // });
    this.getJson.putCartPrice({ "id": 1, "price": this.totalCost }).subscribe((data) => {
      console.log(data);
    });
    // this.getJson.setCheckoutPrice(this.totalCost);
  }


  ngOnInit(): void {
    this.getJson.getDataCart().subscribe((data) => {
      this.recData = data;
      // console.log(data);
      let len = this.recData.length;
      for (let i = 0; i < len; i++) {
        this.totalCost = this.recData[i].price + this.totalCost
      }
    });

    this.getJson.putCartPrice({ "id": 1, "price": this.totalCost }).subscribe((data) => {
      console.log(data);
    });

  }

}
