import { showAlert } from './../../shared/model/global/app.action';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../shared/service/master.service";
import { addBlog, addBlogSuccess, deleteBlog, deleteBlogSuccess, loadBlog, loadBlogFail, loadBlogSuccess, updateBlog, updateBlogSuccess } from "./blog.action";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { Blog } from "../../shared/model/blog";

@Injectable({
    providedIn: 'root'
})
export class BlogEffects {
    constructor(private action$: Actions, private service: MasterService) { }

    _blog = createEffect(() => {
        return this.action$.pipe(
            ofType(loadBlog),
            exhaustMap(() => {
                return this.service.getAllBlogs().pipe(
                    map((blogs) => loadBlogSuccess({ blogList: blogs })),
                    catchError((err) => {
                        return of(loadBlogFail({ errorMessage: err.message }));
                    })
                );
            })
        );
    });

    _addBlog = createEffect(() => {
        return this.action$.pipe(
            ofType(addBlog),
            switchMap((action) => {
                return this.service.createBlog(action.blogInput).pipe(
                    switchMap((blog) => of(
                        addBlogSuccess({ blogInput: blog as Blog }),
                        showAlert({ message: 'Blog added successfully', actionResult: 'pass' })
                    )),
                    catchError((err) => {
                        return of(showAlert({ message: 'Blog not added due to server error', actionResult: 'fail' }));
                    })
                );
            })
        );
    });

    _updateBlog = createEffect(() =>
        this.action$.pipe(
            ofType(updateBlog),
            switchMap((action) =>
                this.service.updateBlog(action.blogInput).pipe(
                    switchMap(() => of(
                        updateBlogSuccess({ blogInput: action.blogInput as Blog }),
                        showAlert({ message: 'Updated successfully', actionResult: 'pass' }))),
                    catchError(() => of(showAlert({ message: 'Updation failed', actionResult: 'fail' }))
                    )
                )
            )
        )
    );

    _deleteBlog = createEffect(() => {
        return this.action$.pipe(
            ofType(deleteBlog),
            switchMap((action) => {
                return this.service.deleteBlog(action.id).pipe(
                    switchMap(() => of(
                        deleteBlogSuccess({ id: action.id as number }),
                        showAlert({ message: 'Deleted successfully', actionResult: 'pass' }))),
                    catchError(() => {
                        return of(showAlert({ message: 'Deletion failed', actionResult: 'fail' }));
                    })
                );
            })
        );
    });
}