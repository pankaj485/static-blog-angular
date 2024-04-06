import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogItem } from '../types/blog.types';
import { blogData } from '../database/blogs.db';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css',
})
export class SingleBlogComponent {
  blogId: string | null = null;
  blogs = blogData;
  blog!: BlogItem;
  leftArrowIcon = '../../assets/left-arrow-svgrepo-com.svg';

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((res: any) => {
      this.blogId = res.id;
      this.blog = this.blogs.filter((blog) => blog.id === this.blogId)[0];
      console.log('valid blog: ', this.blog);
    });
  }
}
