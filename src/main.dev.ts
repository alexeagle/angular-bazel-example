import {platformBrowser} from '@angular/platform-browser';
import {AppModuleDevNgFactory} from './app.module.dev.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleDevNgFactory);
