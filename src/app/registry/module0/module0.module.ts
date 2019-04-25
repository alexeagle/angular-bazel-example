import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../../../shared/material/material.module';

import {Cmp28Component} from './cmp28/cmp28.component';
import {Cmp29Component} from './cmp29/cmp29.component';

@NgModule({
  declarations: [Cmp28Component, Cmp29Component],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [Cmp28Component, Cmp29Component]
})
export class Module0Module {
}
