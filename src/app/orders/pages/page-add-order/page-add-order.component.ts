import {Component, OnInit} from '@angular/core';
import {Order} from "../../../core/modele/order";
import {OrdersService} from "../../services/orders.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  item: Order = new Order();

  constructor(private orderService: OrdersService, private router: Router) {
  }

  ngOnInit() {

  }

  onAdd(event: Order) {
    console.log(event);
    this.orderService.add(event).subscribe((data) => {
        this.router.navigate(['orders']);
      },
      (error) => {
        console.log(error)
        this.router.navigate(['home']);
      },
      () => console.log('fini')
    )
  }
}
