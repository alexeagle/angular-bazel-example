import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import {TodosComponent} from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule, FormsModule, RouterModule, MaterialModule, MatListModule,
    MatCardModule, RouterModule.forChild([{path: '', component: TodosComponent}])
  ],

})
export class TodosModule {
}
