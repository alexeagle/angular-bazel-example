import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp2Component} from './cmp2/cmp2.component';
import {Cmp3Component} from './cmp3/cmp3.component';

@NgModule({
  declarations: [Cmp2Component, Cmp3Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp2Component, Cmp3Component]
})
export class Module1Module {
}
