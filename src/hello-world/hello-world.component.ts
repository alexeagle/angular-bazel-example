import {Component, NgModule} from '@angular/core';
import {msg} from '../lib/file';

@Component({
  selector: 'hello-world-app',
  template: `
    <div>Hello {{ name }}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
    hhheellllooo
    1234567890
    1234567890
    1234567890
    1234567890
    1234567890
    1234567890
  `,
  styleUrls: ['./hello-world-styles.css']
})
export class HelloWorldComponent {
  name: string = msg;
}
