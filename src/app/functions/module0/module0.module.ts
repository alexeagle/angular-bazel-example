import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp12Component} from './cmp12/cmp12.component';
import {Cmp13Component} from './cmp13/cmp13.component';

@NgModule({
  declarations: [Cmp12Component, Cmp13Component],
  imports: [CommonModule],
  exports: [Cmp12Component, Cmp13Component]
})
export class Module0Module {
}
