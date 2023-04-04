import {StateOrder} from "../enums/state-order";

export interface OrdersI {
  "tjmHt": number,
  "nbJours": number,
  "tva": number,
  "state": StateOrder,
  "typePresta": string,
  "client": string,
  "comment": string,
  "id": number
}
