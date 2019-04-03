import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp0Component} from './cmp0/cmp0.component';
import {Cmp1Component} from './cmp1/cmp1.component';

@NgModule({
  declarations: [Cmp0Component, Cmp1Component],
  imports: [CommonModule],
  exports: [Cmp0Component, Cmp1Component]
})
export class Module0Module {
}
