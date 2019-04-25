import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp30Component} from './cmp30/cmp30.component';
import {Cmp31Component} from './cmp31/cmp31.component';

@NgModule({
  declarations: [Cmp30Component, Cmp31Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp30Component, Cmp31Component]
})
export class Module1Module {
}
