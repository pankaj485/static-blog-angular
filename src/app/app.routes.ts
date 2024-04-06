import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'blogs' },
  { path: '**', redirectTo: 'blogs' },
];
