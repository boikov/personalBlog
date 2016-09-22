/**
 * Created by boiko on 9/22/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogPostsComponent } from "./blogPosts.component";

@NgModule({
	          imports     : [BrowserModule],
	          declarations: [BlogPostsComponent],
	          bootstrap   : [BlogPostsComponent],
	          exports     : [BlogPostsComponent]
          })
export class BlogPostsModule {
}