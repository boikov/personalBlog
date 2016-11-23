/**
 * Created by Boykov D. on 9/18/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LayoutModule }  from './pages/_layout.module';

@NgModule({
	          imports     : [BrowserModule, LayoutModule],
	          declarations: [AppComponent],
	          bootstrap   : [AppComponent],
          })
export class AppModule {
}