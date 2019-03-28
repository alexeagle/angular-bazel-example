import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <h1>Welcome to Angular Bazel Example</h1>

    This application demonstrates a monorepo building a large Angular application with Bazel.

    <ul>Features:
    <li><strong>Angular CLI         </strong>: you can use the <code>ng</code> command to run build, serve, test, and e2e</li>
    <li><strong>Angular Libraries   </strong>: to maximize build incrementality, each Angular module is compiled as a separate step</li>
    <li><strong>TypeScript Libraries</strong>: see src/lib for a trivial example of a pure-TS library that's consumed in the application</li>
    <li><strong>Sass                </strong>: we use Sass for all styling</li>
    <li><strong>Material design     </strong>: as you can see here</li>
    <li><strong>Redux-style state   </strong>: using NgRx Store</li>
    <li><strong>Lazy loading        </strong>: in production mode, the application is served in chunks</li>
    <li><strong>Differential loading</strong>: modern browsers will load code in the ES2015 syntax, which is smaller and requires fewer polyfills</li>
    <li><strong>Docker              </strong>: see below where we package up the production app for deployment on Kubernetes.</li>
    </ul>
    `,
})
export class Home {
}

@NgModule({
  declarations: [Home],
  imports: [RouterModule.forChild([{path: '', component: Home}])],
})
export class HomeModule {
}