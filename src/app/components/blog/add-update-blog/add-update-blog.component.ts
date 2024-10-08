import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Blog, Blogs } from '../../../shared/model/blog';
import { updateBlog, addBlog } from '../../../store/blog/blog.action';
import { fetchBlogById } from '../../../store/blog/blog.selector';
import { spinner } from '../../../store/global/app.action';

@Component({
  selector: 'app-add-update-blog',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-update-blog.component.html',
  styleUrl: './add-update-blog.component.css'
})
export class AddUpdateBlogComponent implements OnInit, AfterViewInit {

  blogForm !: FormGroup<any>
  formTitle !: string;
  editBlogId !: number;

  constructor(
    private store: Store<Blogs>,
    private dialog: MatDialogRef<AddUpdateBlogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required]
    })
  }

  ngAfterViewInit(): void {
    this.formTitle = this.data.title
    if (this.data.isEdit) {
      this.editBlogId = this.data.id
      this.store.select(fetchBlogById(this.editBlogId)).subscribe((blog: any) => {
        this.blogForm.get('title')?.setValue(blog.title)
        this.blogForm.get('desc')?.setValue(blog.description)
      })
    }
  }

  submit(): void {
    if (this.blogForm.valid) {
      this.store.dispatch(spinner({ isLoader: true }))
      const blogInput: Blog = {
        id: 0,
        title: this.blogForm.get('title')?.value,
        description: this.blogForm.get('desc')?.value
      }

      setTimeout(() => {
        if (this.data.isEdit) {
          blogInput.id = this.editBlogId;
          this.store.dispatch(updateBlog({ blogInput: blogInput }))
          this.store.dispatch(spinner({ isLoader: false }))
        } else {
          this.store.dispatch(addBlog({ blogInput: blogInput }))
          this.store.dispatch(spinner({ isLoader: false }))
        }
      }, 1000);
      this.close();
    }
  }

  close(): void {
    this.dialog.close();
  }
}
