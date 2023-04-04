import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Order} from "../../../core/modele/order";
import {StateOrder} from "../../../core/enums/state-order";

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  states = Object.values(StateOrder);
  form!: FormGroup;
  @Input() init!: Order

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {

  }

  ngOnInit() {
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
  }
}
