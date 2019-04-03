import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp6Component} from './cmp6/cmp6.component';
import {Cmp7Component} from './cmp7/cmp7.component';

@NgModule({
  declarations: [Cmp6Component, Cmp7Component],
  imports: [CommonModule],
  exports: [Cmp6Component, Cmp7Component]
})
export class Module1Module {
}
