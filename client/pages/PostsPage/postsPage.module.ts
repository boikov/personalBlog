/**
 * Created by Boykov D. on 10/30/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsPageComponent } from "./postsPage.component";
import { PostMiniInfoModule } from "../../components/postMiniInfoComponent/post-mini-info.module";
import { PostService } from "../../services/post.service";
import { RequestService } from "../../services/request.service";
import { HttpModule } from "@angular/http";

@NgModule({
	          imports     : [BrowserModule, PostMiniInfoModule, HttpModule],
	          declarations: [PostsPageComponent],
	          bootstrap   : [PostsPageComponent],
	          providers   : [PostService],
	          exports     : [PostsPageComponent]
          })
export class PostsPageModule {
}