import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor(private getJson: DataStorageService) { }
  recData: any

  fields = [
    "Transaction id",
    "Transaction Amount",
    "Transaction Time"
  ]

  ngOnInit(): void {
    this.getJson.getTransaction().subscribe((data) => {
      this.recData = data;
      // console.log(data);
    });
  }

}
