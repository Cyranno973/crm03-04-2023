import {Component, OnInit} from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/modele/order";
import {StateOrder} from "../../../core/enums/state-order";

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  collection!: Order[];
  states = Object.values(StateOrder);
  headers: string [] = ['Action', 'Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Totalt TTC', 'State'];

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.orderService.collection.subscribe(data => this.collection = data);
  }
}
