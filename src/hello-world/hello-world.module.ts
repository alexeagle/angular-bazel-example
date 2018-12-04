import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {MatCardModule} from '@angular/material/card';

import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    FormsModule, RouterModule, MaterialModule, MatCardModule,
    RouterModule.forChild([{path: '', component: HelloWorldComponent}])
  ],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}
