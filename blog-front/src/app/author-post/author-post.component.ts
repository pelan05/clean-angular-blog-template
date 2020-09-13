import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../service/blog-post.service';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-author-post',
  templateUrl: './author-post.component.html',
  styleUrls: ['./author-post.component.css']
})
export class AuthorPostComponent implements OnInit {
  public post: BlogPost;
  public processing = false;
  public submitted = false;
  public success = false;
  public failure = false;

  constructor(private postService: BlogPostService) {}

  ngOnInit() {
    this.post = new BlogPost();
  }

  public submit(): void {
    this.processing = this.submitted = true;

    console.log('submitting blog post: ' + JSON.stringify(this.post));

    this.postService.CreatePost(this.post).subscribe(
      // response => console.log('response on new post: ' + JSON.stringify(response))
      response => {
        // Handle each observable response
        console.log('result: ' + response);
        this.processing = false;
      },
      () => {
        // error response code
        this.processing = false;
        this.failure = true;
      },
      () => {
        // success response code
        this.processing = false;
        this.success = true;
      }
    );
  }
}
