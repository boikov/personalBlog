/**
 * Created by Boykov D. on 9/18/2016.
 */

import {
	Component,
	ViewEncapsulation
} from '@angular/core';

@Component({
	           selector     : 'body',
	           template     : '<app></app>',
	           styles       : [String(require("./app.style.scss"))],
	           encapsulation: ViewEncapsulation.None

           })
export class AppComponent {
}