/**
 * Created by boiko on 9/22/2016.
 */

export interface IUserModel{
	email:string;
	password:string;
}

export class User{
	public email:string;

	constructor(user:IUserModel){
		this.email=user.email;
	}
}