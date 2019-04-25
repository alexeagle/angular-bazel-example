import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp34Component} from './cmp34/cmp34.component';
import {Cmp35Component} from './cmp35/cmp35.component';

@NgModule({
  declarations: [Cmp34Component, Cmp35Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp34Component, Cmp35Component]
})
export class Module1Module {
}
