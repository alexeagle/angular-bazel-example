import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp10Component} from './cmp10/cmp10.component';
import {Cmp11Component} from './cmp11/cmp11.component';

@NgModule({
  declarations: [Cmp10Component, Cmp11Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp10Component, Cmp11Component]
})
export class Module1Module {
}
