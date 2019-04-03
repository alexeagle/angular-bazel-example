import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp18Component} from './cmp18/cmp18.component';
import {Cmp19Component} from './cmp19/cmp19.component';

@NgModule({
  declarations: [Cmp18Component, Cmp19Component],
  imports: [CommonModule],
  exports: [Cmp18Component, Cmp19Component]
})
export class Module1Module {
}
