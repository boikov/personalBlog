/**
 * Created by boiko on 9/22/2016.
 */
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { IUserModel } from "../../model/user.model";

@Component({
	           selector   : 'auth-form',
	           templateUrl: require('raw!./auth.template.html')
           })
export class AuthComponent {
	public result: String = "";

	constructor(private authService: AuthService) {}

	public registerUser(form: NgForm) {
		let user: IUserModel = form.value;
		this.authService.singIn(user)
		    .subscribe((data)=> {
			    this.result = data.token;
		    }, (err)=> {console.log(err)});
	}

	public auth(form: NgForm) {
		let user: IUserModel = form.value;
		this.authService.authentification(user)
		    .subscribe((data)=> {
			    console.log(data);
		    }, (err)=> {console.log(err)});
	}
}