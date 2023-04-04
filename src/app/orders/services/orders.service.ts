import {Injectable} from '@angular/core';
import {Order} from "../../core/modele/order";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  collection: any = [
    {
      "tjmHt": 1200,
      "nbJours": 10,
      "tva": 20,
      "state": "CANCELLED",
      "typePresta": "coachingDFGH",
      "client": "Modis",
      "comment": "Merci Modis pour les 10k",
      "id": 1
    },
    {
      "tjmHt": 1200,
      "nbJours": 1,
      "tva": 20,
      "state": "CONFIRMED",
      "typePresta": "coaching",
      "client": "M2i",
      "comment": null,
      "id": 2
    }
  ]

  addOrder(order: Order) {
    this.collection.push(order);
  }

  constructor() {
  }
}
