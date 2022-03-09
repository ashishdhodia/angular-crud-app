import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private ht: HttpClient) { }

  getDataProduct() { return this.ht.get("http://localhost:3000/product"); }
  postDataProduct(data: any) { return this.ht.post("http://localhost:3000/product", data); }
  putDataProduct(data: any, id: any) { return this.ht.put(`http://localhost:3000/product/${id}`, data); }
  deleteDataProduct(id: any) { return this.ht.delete(`http://localhost:3000/product/${id}`) }

  getDataBuyer() { return this.ht.get("http://localhost:3000/buyer"); }
  postDataBuyer(data: any) { return this.ht.post("http://localhost:3000/buyer", data); }
  putDataBuyer(data: any, id: any) { return this.ht.put(`http://localhost:3000/buyer/${id}`, data); }
  deleteDataBuyer(id: any) { return this.ht.delete(`http://localhost:3000/buyer/${id}`) }

  getDataSeller() { return this.ht.get("http://localhost:3000/sellers"); }
  postDataSeller(data: any) { return this.ht.post("http://localhost:3000/sellers", data); }
  putDataSeller(data: any, id: any) { return this.ht.put(`http://localhost:3000/sellers/${id}`, data); }
  deleteDataSeller(id: any) { return this.ht.delete(`http://localhost:3000/sellers/${id}`) }
  
  getDataCustomer() { return this.ht.get("http://localhost:3000/customer"); }
  postDataCustomer(data: any) { return this.ht.post("http://localhost:3000/customer", data); }
  putDataCustomer(data: any, id: any) { return this.ht.put(`http://localhost:3000/customer/${id}`, data); }
  deleteDataCustomer(id: any) { return this.ht.delete(`http://localhost:3000/customer/${id}`) }

  getDataCartToPost(id: any) { return this.ht.get("http://localhost:3000/product/" + id); }
  getDataCart() { return this.ht.get("http://localhost:3000/cart/"); }
  postDataCart(data: any) { return this.ht.post("http://localhost:3000/cart/", data); }
  putDataCart(data: any, id: any) { return this.ht.put(`http://localhost:3000/cart/${id}`, data); }
  deleteDataCart(id: any) { return this.ht.delete(`http://localhost:3000/cart/${id}`) }
  
  
  getCartPrice() { return this.ht.get("http://localhost:3000/checkout/"); }
  putCartPrice(data: any) { return this.ht.put("http://localhost:3000/checkout/1", data); }
  deleteCartPrice() { return this.ht.delete("http://localhost:3000/checkout/1") }
  postCartrPrice(data: any) { return this.ht.post("http://localhost:3000/checkout/", data); }
  

  postTransaction(data: any) { return this.ht.post("http://localhost:3000/txhistory", data); }
  getTransaction() {return this.ht.get("http://localhost:3000/txhistory/");}
}
