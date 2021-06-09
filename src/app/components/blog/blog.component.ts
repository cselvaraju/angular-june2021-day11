import { Component, OnInit } from '@angular/core';

import { PostService } from "../../services/post.service";

import { Post } from "../../models/post.model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  getDataFromServer() {
    this.postService.getPosts()
      .subscribe(
        data => this.posts = data
      )
  }
}
