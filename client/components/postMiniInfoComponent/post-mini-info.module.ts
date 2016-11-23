/**
 * Created by Boykov D. on 11/24/2016.
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule }      from '@angular/core';
import { PostMiniInfoComponent } from "./post-mini-info.component";

@NgModule({
	          imports     : [BrowserModule],
	          declarations: [PostMiniInfoComponent],
	          bootstrap   : [PostMiniInfoComponent],
	          exports     : [PostMiniInfoComponent]
          })
export class PostMiniInfoModule {}