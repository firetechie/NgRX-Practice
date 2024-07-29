import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { BlogComponent } from './components/counter/blog/blog.component';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'counter', title: 'Counter', component: CounterComponent, canActivate: [authGuard] },
    { path: 'blog', title: 'Blog', component: BlogComponent, canActivate: [authGuard] }
];
