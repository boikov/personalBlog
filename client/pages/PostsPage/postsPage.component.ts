/**
 * Created by Boykov D. on 10/30/2016.
 */
import { Component } from '@angular/core';
import { PostService } from "../../services/post.service";
import { PostMiniInfo } from "../../model/post-mini-info.model";

@Component({
	           selector: 'blog-posts',
	           template: require('./postsPage.template.html'),
	           styles  : [String(require('./postsPage.style.scss'))]
           })
export class PostsPageComponent {
	public posts: PostMiniInfo[];

	constructor(private _postService: PostService) {
		_postService.getPosts()
		            .then((data)=> {
			            this.posts = data;
		            });
	}
}