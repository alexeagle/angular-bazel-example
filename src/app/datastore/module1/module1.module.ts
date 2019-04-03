import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp10Component} from './cmp10/cmp10.component';
import {Cmp11Component} from './cmp11/cmp11.component';

@NgModule({
  declarations: [Cmp10Component, Cmp11Component],
  imports: [CommonModule],
  exports: [Cmp10Component, Cmp11Component]
})
export class Module1Module {
}
