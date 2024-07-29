import { createReducer, on } from '@ngrx/store';
import { initialState } from './blog.store';
import { loadBlog } from './blog.action';

const _blogReducer = createReducer(initialState, on(loadBlog, (state) => {
    return { ...state }
}))

export const blogReducer = (state: any, action: any) => _blogReducer(state, action)