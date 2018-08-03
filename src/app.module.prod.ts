
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {todoReducer} from './reducers/reducers';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: './hello-world/hello-world.module#HelloWorldModule'},
  {path: 'todos', pathMatch: 'full', loadChildren: './todos/todos.module#TodosModule'},
];

@NgModule({
  imports: [
    AppModule, BrowserModule, RouterModule.forRoot(appRoutes), StoreModule.forRoot({todoReducer})
  ],
  bootstrap: [AppComponent],
})
export class AppModuleProd {
}
