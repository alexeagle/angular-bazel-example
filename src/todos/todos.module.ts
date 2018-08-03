import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {TodosComponent} from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule, FormsModule, RouterModule,
    RouterModule.forChild([{path: '', component: TodosComponent}])
  ],

})
export class TodosModule {
}