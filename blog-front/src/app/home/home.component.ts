import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = true;
  posts: BlogPost[];

  constructor(private postService: BlogPostService) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    this.postService.GetPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
