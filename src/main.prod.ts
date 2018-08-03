import {platformBrowser} from '@angular/platform-browser';
import {AppModuleProdNgFactory} from './app.module.prod.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleProdNgFactory);
