/**
 * Created by Boykov D. on 11/24/2016.
 */
import {
	Component,
	ViewEncapsulation,
	Input
} from "@angular/core";
import { PostMiniInfo } from "../../model/post-mini-info.model";

@Component({
	           selector     : "post-mini-info",
	           template     : require('./post-mini-info.template.html'),
	           styles       : [String(require("./post-mini-info.style.scss"))],
	           encapsulation: ViewEncapsulation.Emulated
           })
export class PostMiniInfoComponent {
	@Input() postMiniInfo: PostMiniInfo;
}