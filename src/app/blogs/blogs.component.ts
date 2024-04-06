import { Component, OnInit } from '@angular/core';
import { BlogItem } from '../types/blog.types';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { blogData } from '../database/blogs.db';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  sampleblog: BlogItem = {
    title: 'static blog',
    author: 'Developer',
    description: 'This is the main content of the blog',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste earum quae atque non dolorem laudantium libero excepturi voluptates deleniti aliquid debitis eligendi, eveniet maxime alias ad eaque nihil rerum odit officia? Dolore vitae corrupti recusandae fugiat expedita voluptate veniam voluptas, repudiandae mollitia assumenda nostrum aperiam similique nihil, sunt totam ipsa illo ipsum quae reiciendis fuga. Sequi fugiat ea nesciunt.',
    publishedDate: String(new Date(Date.now())),
    id: String(Date.now()),
  };

  blogPosts = blogData.map((currentBlog) => {
    const { content } = currentBlog;
    return Object.assign({}, currentBlog, {
      content: content.substring(0, 99),
    });
  });

  constructor(private router: Router) {}

  openBlog(blogId: string) {
    this.router.navigateByUrl(`blog/${blogId}`);
  }

  public getBlogs() {
    return this.blogPosts;
  }

  ngOnInit() {
    // this.createData();
  }
}
