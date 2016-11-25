/**
 * Created by Boykov D. on 11/24/2016.
 */
import { Injectable } from "@angular/core";
import { RequestService } from "./request.service";
import {
	PostMiniInfo,
} from "../model/post-mini-info.model";

@Injectable()
export class PostService{

	public getPosts(): Promise<PostMiniInfo[]> {
		return new Promise((resolve, reject)=> {
			let posts = new Array<PostMiniInfo>();
			for (let i = 0; i < 10; i++) {

				posts.push(<PostMiniInfo>{
					id   : 1,
					title: '1',
					description:'olololololosdfsdfsdfsdfsdfsdfsdfsdf'
				});
			}
			resolve(posts)
		});
	}
}