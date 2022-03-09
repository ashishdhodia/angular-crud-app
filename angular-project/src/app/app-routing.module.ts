import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CustomerComponent } from './customer/customer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionSuccessComponent } from './transaction-success/transaction-success.component';

const routes: Routes = [
  { path: "product", component: ProductComponent },
  { path: "seller", component: SellerComponent },
  { path: "buyer", component: BuyerComponent },
  { path: "customer", component: CustomerComponent },
  { path: 'cart', component: CartComponent },
  // { path: ' ', component: SignInComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "txhistory", component: TransactionHistoryComponent },
  { path: "txsuccess", component: TransactionSuccessComponent },
  // { path: '**', component: SignInComponent },
  { path: "sign-in", component: SignInComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
