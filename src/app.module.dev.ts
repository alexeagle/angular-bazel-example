
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {HelloWorldModuleNgFactory} from './hello-world/hello-world.module.ngfactory';
import {todoReducer} from './reducers/reducers';
import {TodosModuleNgFactory} from './todos/todos.module.ngfactory';

export function helloWorldModule(): any {
  return HelloWorldModuleNgFactory;
}
export function todosModule(): any {
  return TodosModuleNgFactory;
}

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: helloWorldModule},
  {path: 'todos', pathMatch: 'full', loadChildren: todosModule},
];

@NgModule({
  imports: [
    AppModule, BrowserModule, RouterModule.forRoot(appRoutes), StoreModule.forRoot({todoReducer})
  ],
  bootstrap: [AppComponent],
})
export class AppModuleDev {
}
