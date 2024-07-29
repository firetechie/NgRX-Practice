import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Blog } from "../../shared/model/blog";

const getBlogState = createFeatureSelector<Blog[]>('blog');

export const getBlog = createSelector(getBlogState, (state: Blog[]) => state)