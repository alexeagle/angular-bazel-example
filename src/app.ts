
import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HelloWorldModule } from './hello-world/hello-world.module';

@Component({
  selector: 'app-component',
  template: '<hello-world-app></hello-world-app>'
})
export class BootstrapComponent {}

@NgModule({
  imports: [BrowserModule, HelloWorldModule],
  declarations: [BootstrapComponent],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
