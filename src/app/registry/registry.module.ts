import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {Module0Module} from './module0/module0.module';
import {Module1Module} from './module1/module1.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule, RouterModule.forChild([{path: '', component: IndexComponent}]), Module0Module,
    Module1Module
  ]
})
export class RegistryModule {
}
