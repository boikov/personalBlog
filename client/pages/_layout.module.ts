/**
 * Created by boiko on 10/30/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from "./_layout.component";
import { FooterModule } from "../components/footerComponent/footer.module"
import { HeaderModule } from "../components/headerComponent/header.module"
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routers";
import { PostsPageModule } from "./PostsPage/postsPage.module";

@NgModule({
	          imports     : [BrowserModule, PostsPageModule, FooterModule,
	                         HeaderModule, RouterModule.forRoot(ROUTES, { useHash: false })],
	          declarations: [LayoutComponent],
	          bootstrap   : [LayoutComponent],
	          exports     : [LayoutComponent],
          })
export class LayoutModule {
}