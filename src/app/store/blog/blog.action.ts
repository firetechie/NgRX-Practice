import { createAction, props } from "@ngrx/store";
import { Blog } from "../../shared/model/blog";

export const loadBlog = createAction('loadBlog');
export const addBlog = createAction('addBlog', props<{ blogInput: Blog }>());
export const upadteBlog = createAction('updateBlog', props<{ blogInput: Blog }>());
export const deleteBlog = createAction('deleteBlog', props<{ id: number }>());