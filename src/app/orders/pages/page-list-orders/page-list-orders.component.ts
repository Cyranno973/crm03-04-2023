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
  states = Object.values(StateOrder);
  collection: Order[] = [];
  headers: string [] = ['Action', 'Type', 'Client', 'NbJours', 'Tjm HT', 'Total HT', 'Totalt TTC', 'State'];

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    console.log(this.states)

    this.collection = this.orderService.collection;
    // console.log(this.collection)
  }

  total(val: number, coef: number, tva?: number): number {
    console.log('salut')
    if (tva) {
      return val * coef * (1 + tva / 100);
    }
    return val * coef
  }

}
