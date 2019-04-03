import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp32Component} from './cmp32/cmp32.component';
import {Cmp33Component} from './cmp33/cmp33.component';

@NgModule({
  declarations: [Cmp32Component, Cmp33Component],
  imports: [CommonModule],
  exports: [Cmp32Component, Cmp33Component]
})
export class Module0Module {
}
