/**
 * Created by Boykov D. on 10/30/2016.
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule }      from '@angular/core';
import { FooterComponent } from "./footer.component";

@NgModule({
	          imports     : [BrowserModule],
	          declarations: [FooterComponent],
	          bootstrap   : [FooterComponent],
	          exports     : [FooterComponent]
          })
export class FooterModule {
}