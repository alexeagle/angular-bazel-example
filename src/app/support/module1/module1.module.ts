import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp38Component} from './cmp38/cmp38.component';
import {Cmp39Component} from './cmp39/cmp39.component';

@NgModule({
  declarations: [Cmp38Component, Cmp39Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp38Component, Cmp39Component]
})
export class Module1Module {
}
