/**
 * Created by Boykov D. on 11/26/2016.
 */
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AuthService } from "../../services/auth.service";
import { AuthPageComponent } from "./authPage.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RequestService } from "../../services/request.service";

@NgModule({
	          imports     : [BrowserModule, FormsModule, HttpModule],
	          declarations: [AuthPageComponent],
	          exports     : [AuthPageComponent],
	          bootstrap   : [AuthPageComponent],
	          providers   : [RequestService, AuthService]
          })
export class AuthPageModule {
}