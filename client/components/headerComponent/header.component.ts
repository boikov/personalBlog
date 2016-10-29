/**
 * Created by boiko on 9/22/2016.
 */
import {
	Component,
	ViewEncapsulation
} from "@angular/core";

@Component({
	           selector     : "custom-header",
	           template     : require('raw!./header.template.html'),
	           styles       : [String(require("./header.style.scss"))],
	           encapsulation: ViewEncapsulation.Emulated
           })
export class HeaderComponent {
}