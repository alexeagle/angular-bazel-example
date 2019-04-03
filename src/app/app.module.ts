
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';

import {MaterialModule} from '../shared/material/material.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BillingModule} from './billing/billing.module';
import {ComputeModule} from './compute/compute.module';
import {DatastoreModule} from './datastore/datastore.module';
import {FunctionsModule} from './functions/functions.module';
import {HomeModule} from './home/home';
import {LoggingModule} from './logging/logging.module';
import {MonitoringModule} from './monitoring/monitoring.module';
import {NetworkingModule} from './networking/networking.module';
import {RegistryModule} from './registry/registry.module';
import {StorageModule} from './storage/storage.module';
import {SupportModule} from './support/support.module';
import {todoReducer} from './todos/reducers/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, BrowserModule, BrowserAnimationsModule, MaterialModule, HomeModule,
    StoreModule.forRoot({todoReducer}), BillingModule, ComputeModule, DatastoreModule,
    FunctionsModule, LoggingModule, MonitoringModule, NetworkingModule, RegistryModule,
    StorageModule, SupportModule
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
