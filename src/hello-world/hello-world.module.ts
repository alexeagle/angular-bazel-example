import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [MatButtonModule],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {}
