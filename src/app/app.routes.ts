import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

export const routes: Routes = [
  { path: 'blog/:id', component: SingleBlogComponent },
  { path: '', pathMatch: 'full', component: BlogsComponent },
  { path: '**', redirectTo: '' },
];
