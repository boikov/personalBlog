/**
 * Created by boykovdmitriy on 9/18/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AuthModule } from "../authComponent/auth.module";

@NgModule({
	          imports     : [BrowserModule, AuthModule],
	          declarations: [AppComponent],
	          bootstrap   : [AppComponent],
          })
export class AppModule {
}