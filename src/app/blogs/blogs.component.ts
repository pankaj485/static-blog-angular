import { Component, OnInit } from '@angular/core';
import { BlogItem } from '../types/blog.types';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
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
    publishedDate: new Date(Date.now()),
    id: String(Date.now()),
  };

  blogPosts: BlogItem[] = [];

  generateBlogId() {
    let prefix = '';
    let suffix = '';
    for (let i = 0; i < 4; i++) {
      prefix += Math.floor(Math.random() * 5);
    }
    for (let i = 0; i < 3; i++) {
      suffix += Math.floor(Math.random() * 5);
    }
    return `${prefix}${Date.now()}${suffix}`;
  }

  createData() {
    for (let i = 0; i < 10; i++) {
      const title = `${this.sampleblog['title']} ${i + 1}`;
      const author = `${this.sampleblog['author']} ${i + 1}`;
      const id = this.generateBlogId();
      const blogData = Object.assign(
        {},
        { ...this.sampleblog, ...{ title, author, id } }
      );
      this.blogPosts.push(blogData);
    }
  }

  ngOnInit() {
    this.createData();
  }
}
