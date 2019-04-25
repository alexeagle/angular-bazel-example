import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp8Component} from './cmp8/cmp8.component';
import {Cmp9Component} from './cmp9/cmp9.component';

@NgModule({
  declarations: [Cmp8Component, Cmp9Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp8Component, Cmp9Component]
})
export class Module0Module {
}
