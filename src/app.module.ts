
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {todoReducer} from './reducers/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({todoReducer}), MatButtonModule],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
