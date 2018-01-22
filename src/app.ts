import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AngularFirestoreModule} from 'angularfire2/firestore';

import { HelloWorldModule } from './hello-world/hello-world.module';

@Component({
  selector: 'app-component',
  template: '<hello-world-app></hello-world-app>'
})
export class BootstrapComponent {}

@NgModule({
  imports: [BrowserModule, AngularFirestoreModule, HelloWorldModule],
  declarations: [BootstrapComponent],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
