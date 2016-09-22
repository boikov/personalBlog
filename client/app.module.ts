/**
 * Created by boykovdmitriy on 9/18/2016.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FooterComponent } from "./components/footerComponent/footer.component";
import { HeaderComponent } from "./components/headerComponent/header.component";
import { BlogPostsModule } from "./components/blogPostsComponent/blogPosts.module";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routers";

@NgModule({
	          imports     : [BrowserModule, BlogPostsModule,RouterModule.forRoot(ROUTES, { useHash: false })],
	          declarations: [AppComponent, FooterComponent, HeaderComponent],
	          bootstrap   : [AppComponent],
          })
export class AppModule {
}