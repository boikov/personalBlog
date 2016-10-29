/**
 * Created by boiko on 10/30/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsPageComponent } from "./postsPage.component";

@NgModule({
	          imports     : [BrowserModule],
	          declarations: [PostsPageComponent],
	          bootstrap   : [PostsPageComponent],
	          exports     : [PostsPageComponent]
          })
export class PostsPageModule {
}