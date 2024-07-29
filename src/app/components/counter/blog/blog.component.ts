import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blog } from '../../../shared/model/blog';
import { getBlog } from '../../../store/blog/blog.selector';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { AppState } from '../../../shared/model/global/app-state';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogs$ !: Observable<Blog[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.blogs$ = this.store.select(getBlog);
  }
}
