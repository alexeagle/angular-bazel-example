import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp36Component} from './cmp36/cmp36.component';
import {Cmp37Component} from './cmp37/cmp37.component';

@NgModule({
  declarations: [Cmp36Component, Cmp37Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp36Component, Cmp37Component]
})
export class Module0Module {
}
