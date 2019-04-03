import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp14Component} from './cmp14/cmp14.component';
import {Cmp15Component} from './cmp15/cmp15.component';

@NgModule({
  declarations: [Cmp14Component, Cmp15Component],
  imports: [CommonModule],
  exports: [Cmp14Component, Cmp15Component]
})
export class Module1Module {
}
