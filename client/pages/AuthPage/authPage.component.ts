/**
 * Created by Boykov D. on 11/26/2016.
 */

import {
	Component,
	ViewEncapsulation
} from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { NgForm } from "@angular/forms";
@Component({
	           selector     : 'auth-page',
	           template     : require('./authPage.template.html'),
	           styles       : [String(require('./authPage.style.scss'))],
	           encapsulation: ViewEncapsulation.Emulated
           })

export class AuthPageComponent {
	constructor(private authService: AuthService) {}

	signIn(form: NgForm) {

	}
}