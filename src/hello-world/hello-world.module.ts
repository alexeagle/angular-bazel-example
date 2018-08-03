import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [RouterModule, RouterModule.forChild([{path: '', component: HelloWorldComponent}])],
})
export class HelloWorldModule {
}