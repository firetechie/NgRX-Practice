import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUpdateBlogComponent } from './add-update-blog/add-update-blog.component';
import { MatIconModule } from '@angular/material/icon';
import { loadBlog, deleteBlog } from '../../store/blog/blog.action';
import { Blogs } from '../../shared/model/blog';
import { getBlogInfo } from '../../store/blog/blog.selector';
import { spinner } from '../../store/global/app.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, AddUpdateBlogComponent, MatIconModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  // blogs$ !: Observable<Blog[]>;
  blogInfo$ !: Observable<Blogs>;

  constructor(
    private store: Store<Blogs>,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(spinner({ isLoader: true }))
    setTimeout(() => {
      this.store.dispatch(loadBlog());
      this.store.dispatch(spinner({ isLoader: false }))
    }, 1000);
    // this.blogs$ = this.store.select(getBlog);
    this.blogInfo$ = this.store.select(getBlogInfo);
    // this.store.select(getBlogInfo).subscribe((blogInfo) => this.blogInfo = blogInfo);
  }

  openAddBlog(): void {
    this.blogForm(0, 'Add Blog', false);
  }

  openUpdateBlog(id: number): void {
    // this.blogForm(id, 'Update Blog', true);
    this.router.navigate(['blog/edit/' + id])
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
    this.store.dispatch(spinner({ isLoader: true }))
    if (confirm("Are you sure you want to remove?")) {
      setTimeout(() => {
        this.store.dispatch(deleteBlog({ id: id }))
        this.store.dispatch(spinner({ isLoader: false }))
      }, 1000);
    }
  }
}
