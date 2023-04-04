import {Component} from '@angular/core';
import {UserInterface} from "./core/interfaces/userInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: UserInterface = {name: 'john', age: 7, hobbies: ['piano', 'batterie']}
  valueInput = 'aa';
  myDate = Date.now();

  typeInput = 'text'

  title = 'crm1';
  name = 'sarah';
  lastName: string = 'Cleo';

  get checkPerformance() {
    console.log(this.user.name)
    return true;
  }

  bonjour() {
    console.log('bonjour');
    // this.typeInput = 'text'
  }

  display() {
    console.log(this.valueInput);
  }

}

