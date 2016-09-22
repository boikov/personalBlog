/**
 * Created by boykovdmitriy on 9/18/2016.
 */

import { Component } from '@angular/core';

@Component({
	           selector: 'my-app',
	           template: `
	<custom-header></custom-header>
	<router-outlet></router-outlet>
	<custom-footer></custom-footer>
`,
           })
export class AppComponent {}