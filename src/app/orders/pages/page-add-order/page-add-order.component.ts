import {Component} from '@angular/core';
import {Order} from "../../../core/modele/order";

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {
  item: Order = new Order();

  constructor() {
  }

  onAdd() {
  }
}
