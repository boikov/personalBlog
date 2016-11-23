/**
 * Created by Boykov D. on 9/22/2016.
 */

export interface IUserModel{
	email:string;
}

export class User{
	public email:string;

	constructor(user:IUserModel){
		this.email=user.email;
	}
}