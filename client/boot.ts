/**
 * Created by boykovdmitriy on 9/18/2016.
 */

import "core-js";
require("zone.js/dist/zone");
require("zone.js/dist/long-stack-trace-zone");
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/appModule/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);