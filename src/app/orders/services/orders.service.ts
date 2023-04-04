import {Injectable} from '@angular/core';
import {Order} from "../../core/modele/order";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environements/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private urlApi = environment.urlApi;
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  set collection(col: Observable<Order[]>) {
    this.collection$ = col
  }

  add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item)
  }

  update(obj: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj)
  }

  getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`)
  }

}
