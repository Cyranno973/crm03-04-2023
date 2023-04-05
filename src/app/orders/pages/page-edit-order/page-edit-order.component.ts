import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../../services/orders.service";
import {Order} from "../../../core/modele/order";

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  item!: Order;

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrdersService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderService.getItemById(Number(id)).subscribe(order => {
      this.item = order;
      console.log(this.item)
    })
  }
}
