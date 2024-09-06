import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blogs } from '../../../shared/model/blog';
import { getRouterInfo } from '../../../store/router/router.selector';

@Component({
  selector: 'app-edit-blog',
  standalone: true,
  imports: [],
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.css'
})
export class EditBlogComponent implements OnInit {
  blogId: number = 0

  constructor(private store: Store<Blogs>) { }

  ngOnInit(): void {
    this.store.select(getRouterInfo).subscribe((id) => this.blogId = id)
  }
}
