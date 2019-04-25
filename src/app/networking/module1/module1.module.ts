import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp26Component} from './cmp26/cmp26.component';
import {Cmp27Component} from './cmp27/cmp27.component';

@NgModule({
  declarations: [Cmp26Component, Cmp27Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp26Component, Cmp27Component]
})
export class Module1Module {
}
