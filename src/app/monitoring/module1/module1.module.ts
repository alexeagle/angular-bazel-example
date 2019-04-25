import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp22Component} from './cmp22/cmp22.component';
import {Cmp23Component} from './cmp23/cmp23.component';

@NgModule({
  declarations: [Cmp22Component, Cmp23Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp22Component, Cmp23Component]
})
export class Module1Module {
}
