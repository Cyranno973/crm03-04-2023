import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Order} from "../../../core/modele/order";
import {StateOrder} from "../../../core/enums/state-order";
import {User} from "../../../core/interfaces/orders-i";

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit, AfterViewInit {
  states = Object.values(StateOrder);
  form!: FormGroup;
  @Input() init!: Order;
  @Output() formSubmit = new EventEmitter<Order>();

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    const user: User = {name: 'rttr'};
    const user1: User = {name: 'rttr', age: 7};

    this.formSubmit.emit(this.form.value)
  }

  ngOnInit() {
    console.log(this.init)
    if (this.init) {
      this.form = this.fb.group({
        tjmHt: [this.init.tjmHt],
        nbJours: [this.init.nbJours],
        tva: [this.init.tva],
        state: [this.init.state],
        typePresta: [this.init.typePresta],
        client: [this.init.client],
        comment: [this.init.comment],
        id: [this.init.id],
      })
    } else {
      this.form = this.fb.group({
        tjmHt: [],
        nbJours: [],
        tva: [],
        state: [],
        typePresta: [],
        client: [],
        comment: [],
        id: [],
      })
    }
  }

  ngAfterViewInit() {
    console.log('after ', this.init)
  }

}
