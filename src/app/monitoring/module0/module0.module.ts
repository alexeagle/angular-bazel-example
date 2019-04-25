import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp20Component} from './cmp20/cmp20.component';
import {Cmp21Component} from './cmp21/cmp21.component';

@NgModule({
  declarations: [Cmp20Component, Cmp21Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp20Component, Cmp21Component]
})
export class Module0Module {
}
