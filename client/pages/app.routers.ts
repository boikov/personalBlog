/**
 * Created by Boykov D. on 9/22/2016.
 */
import { Routes } from '@angular/router';
import { PostsPageComponent } from "./PostsPage/postsPage.component";
import { AuthPageComponent } from "./AuthPage/authPage.component";

export const ROUTES: Routes = [
	{
		path     : '',
		component: PostsPageComponent
	},
	{
		path     : 'auth',
		component: AuthPageComponent
	}
];


