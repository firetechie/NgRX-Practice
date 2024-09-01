import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Blog } from '../model/blog';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl = 'http://localhost:3000/Blogs/';
  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

  haveAccess(): boolean {
    return true;
  }

  showSnackbarAlert(message: any, actionResult: string = 'fail') {
    const _class = actionResult === 'pass' ? 'green-snackbar' : 'red-snackbar'
    return this.snackbar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: [_class],
      duration: 5000
    })
  }

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl)
  }

  createBlog(blogInput: Blog) {
    return this.http.post<Blog>(this.apiUrl, blogInput).pipe(tap(() => this.http.get(`${this.apiUrl}?_limit=1&_sort=id&_order=desc)`)))
  }

  updateBlog(blogInput: Blog) {
    return this.http.put<Blog>(this.apiUrl + blogInput.id, blogInput)
  }

  deleteBlog(id: number) {
    return this.http.delete<Blog>(this.apiUrl + id)
  }
}
