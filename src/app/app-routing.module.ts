import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

// These are lazy-loaded routes - note that we dynamic-import the modules here
// to avoid having an eager dependency on them.

// IMPORTANT: this array is auto-updated by script/generator
// dont rename the 'routes' variable.
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.ngfactory').then(m => m.HomeModuleNgFactory)
  },
  {
    path: 'hello',
    pathMatch: 'full',
    loadChildren: () =>
        import('./hello-world/hello-world.module.ngfactory').then(m => m.HelloWorldModuleNgFactory)
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadChildren: () => import('./todos/todos.module.ngfactory').then(m => m.TodosModuleNgFactory)
  },
  {
    path: 'billing',
    pathMatch: 'full',
    loadChildren: () =>
        import('./billing/billing.module.ngfactory').then(m => m.BillingModuleNgFactory)
  },
  {
    path: 'compute',
    pathMatch: 'full',
    loadChildren: () =>
        import('./compute/compute.module.ngfactory').then(m => m.ComputeModuleNgFactory)
  },
  {
    path: 'datastore',
    pathMatch: 'full',
    loadChildren: () =>
        import('./datastore/datastore.module.ngfactory').then(m => m.DatastoreModuleNgFactory)
  },
  {
    path: 'functions',
    pathMatch: 'full',
    loadChildren: () =>
        import('./functions/functions.module.ngfactory').then(m => m.FunctionsModuleNgFactory)
  },
  {
    path: 'logging',
    pathMatch: 'full',
    loadChildren: () =>
        import('./logging/logging.module.ngfactory').then(m => m.LoggingModuleNgFactory)
  },
  {
    path: 'monitoring',
    pathMatch: 'full',
    loadChildren: () =>
        import('./monitoring/monitoring.module.ngfactory').then(m => m.MonitoringModuleNgFactory)
  },
  {
    path: 'networking',
    pathMatch: 'full',
    loadChildren: () =>
        import('./networking/networking.module.ngfactory').then(m => m.NetworkingModuleNgFactory)
  },
  {
    path: 'registry',
    pathMatch: 'full',
    loadChildren: () =>
        import('./registry/registry.module.ngfactory').then(m => m.RegistryModuleNgFactory)
  },
  {
    path: 'storage',
    pathMatch: 'full',
    loadChildren: () =>
        import('./storage/storage.module.ngfactory').then(m => m.StorageModuleNgFactory)
  },
  {
    path: 'support',
    pathMatch: 'full',
    loadChildren: () =>
        import('./support/support.module.ngfactory').then(m => m.SupportModuleNgFactory)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // TODO: maybe set this based on devmode?
    enableTracing: true,
    // preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
