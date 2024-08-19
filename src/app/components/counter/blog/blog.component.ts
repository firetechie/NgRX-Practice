import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blog } from '../../../shared/model/blog';
import { getBlog } from '../../../store/blog/blog.selector';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { AppState } from '../../../shared/model/global/app-state';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUpdateBlogComponent } from './add-update-blog/add-update-blog.component';
import { MatIconModule } from '@angular/material/icon';
import { deleteBlog } from '../../../store/blog/blog.action';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, AddUpdateBlogComponent, MatIconModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogs$ !: Observable<Blog[]>;

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.blogs$ = this.store.select(getBlog);
  }

  openAddBlog(): void {
    this.blogForm(0, 'Add Blog', false);
  }

  openUpdateBlog(id: number): void {
    this.blogForm(id, 'Update Blog', true);
  }

  private blogForm(id: number, title: string, isEdit: boolean): void {
    this.dialog.open(AddUpdateBlogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit
      }
    })
  }

  deleteBlog(id: number): void {
    if (confirm("Are you sure you want to remove?")) {
      this.store.dispatch(deleteBlog({ id: id }))
    }
  }
}
