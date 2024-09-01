import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blog, Blogs } from "../../shared/model/blog";

const getBlogState = createFeatureSelector<Blogs>('blog');

export const getBlog = createSelector(getBlogState, (state: Blogs) => state.blogList)
export const fetchBlogById = (blogId: number) => createSelector(getBlogState, (state: Blogs) => state.blogList.find((blog: Blog) => blog.id === blogId))

export const getBlogInfo = createSelector(getBlogState, (state: Blogs) => state)