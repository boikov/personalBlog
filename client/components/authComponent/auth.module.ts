/**
 * Created by Boykov D. on 9/22/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AuthService } from "../../services/auth.service";
import { RequestService } from "../../services/request.service";
import { HttpModule } from "@angular/http";

@NgModule({
	          imports     : [BrowserModule, FormsModule, HttpModule],
	          declarations: [AuthComponent],
	          bootstrap   : [AuthComponent],
	          providers   : [AuthService],
	          exports     : [AuthComponent]
          })
export class AuthModule {
}