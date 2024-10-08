import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { authGuard } from './shared/guard/auth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'counter', title: 'Counter', component: CounterComponent, canActivate: [authGuard] },
    { path: 'blog', title: 'Blog', component: BlogComponent, canActivate: [authGuard] },
    { path: 'blog/edit/:id', title: 'Blog', component: EditBlogComponent, canActivate: [authGuard] }
];
