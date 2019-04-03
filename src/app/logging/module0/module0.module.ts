import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp16Component} from './cmp16/cmp16.component';
import {Cmp17Component} from './cmp17/cmp17.component';

@NgModule({
  declarations: [Cmp16Component, Cmp17Component],
  imports: [CommonModule],
  exports: [Cmp16Component, Cmp17Component]
})
export class Module0Module {
}
