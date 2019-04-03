import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {Cmp4Component} from './cmp4/cmp4.component';
import {Cmp5Component} from './cmp5/cmp5.component';

@NgModule({
  declarations: [Cmp4Component, Cmp5Component],
  imports: [CommonModule],
  exports: [Cmp4Component, Cmp5Component]
})
export class Module0Module {
}
