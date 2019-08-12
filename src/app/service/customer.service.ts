import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/*
@author: rohit
Service class access data from json file
*/
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: string = '../assets/customer.json';
  customers: Customer[];
  status: string;
  constructor(private http: HttpClient) {
    this.getCustomers();
  }

  getData(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }

  getCustomers() {
    this.getData().subscribe((data: Customer[]) => {
       this.customers = data;
       console.log('Datas are ' + this.customers);
    });
  }
  getAllCustomers() {
    return this.customers;
  }
  deleteCustomer(i: number): void {
    this.customers.splice(i, 1); //(index, 1) means delete record ... (index, 0) means add record
  }
  addCustomer(customer: Customer){
    this.customers.push(customer);
    return true;
  }
}
