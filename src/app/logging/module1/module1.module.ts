import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp18Component} from './cmp18/cmp18.component';
import {Cmp19Component} from './cmp19/cmp19.component';

@NgModule({
  declarations: [Cmp18Component, Cmp19Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp18Component, Cmp19Component]
})
export class Module1Module {
}
