import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp14Component} from './cmp14/cmp14.component';
import {Cmp15Component} from './cmp15/cmp15.component';

@NgModule({
  declarations: [Cmp14Component, Cmp15Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp14Component, Cmp15Component]
})
export class Module1Module {
}
