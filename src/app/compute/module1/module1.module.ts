import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp6Component} from './cmp6/cmp6.component';
import {Cmp7Component} from './cmp7/cmp7.component';

@NgModule({
  declarations: [Cmp6Component, Cmp7Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp6Component, Cmp7Component]
})
export class Module1Module {
}
