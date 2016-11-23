/**
 * Created by Boykov D. on 10/30/2016.
 */

import { Component } from '@angular/core';

@Component({
	           selector: 'app',
	           template: `
	<custom-header></custom-header>
	<router-outlet></router-outlet>
	<custom-footer></custom-footer>
`,
           })
export class LayoutComponent {
}