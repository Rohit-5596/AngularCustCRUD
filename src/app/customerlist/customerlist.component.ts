import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers = this.customerService.getAllCustomers();
  }
  delete(i: number) {
    if (confirm('Are you sure you want to delete ?')) {
      this.customerService.deleteCustomer(i);
    }
  }
}
