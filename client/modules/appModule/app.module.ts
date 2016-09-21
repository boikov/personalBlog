/**
 * Created by boykovdmitriy on 9/18/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "../auth/auth.component";
import { AuthService } from "../../services/auth.service";
import { RequestService } from "../../services/request.service";
import { HttpModule } from "@angular/http";

@NgModule({
	          imports     : [BrowserModule, FormsModule, HttpModule],
	          declarations: [AppComponent, AuthComponent],
	          bootstrap   : [AppComponent],
	          providers   : [RequestService, AuthService]
          })
export class AppModule {
}