import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp24Component} from './cmp24/cmp24.component';
import {Cmp25Component} from './cmp25/cmp25.component';

@NgModule({
  declarations: [Cmp24Component, Cmp25Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp24Component, Cmp25Component]
})
export class Module0Module {
}
