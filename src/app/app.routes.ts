import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

export const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: '', pathMatch: 'full', redirectTo: 'blogs' },
  { path: '**', redirectTo: 'blogs' },
];
