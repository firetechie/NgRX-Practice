import { createReducer, on } from '@ngrx/store';
import { initialState } from './blog.store';
import { addBlog, deleteBlog, loadBlog, upadteBlog } from './blog.action';
import { Blog } from '../../shared/model/blog';

const _blogReducer = createReducer(initialState,
    on(loadBlog, (state) => {
        return { ...state }
    }),
    on(addBlog, (state, action) => {
        const blog = { ...action.blogInput }
        blog.id = state.blogList.length + 1
        return {
            ...state,
            blogList: [...state.blogList, blog]
        }
    }),
    on(upadteBlog, (state, action) => {
        const _blog = action.blogInput
        const updatedBlog = state.blogList.map((blog: Blog) => _blog.id === blog.id ? _blog : blog)
        return {
            ...state,
            blogList: updatedBlog
        }
    }),
    on(deleteBlog, (state, action) => {
        const updatedBlogList = state.blogList
            .filter((blog) => blog.id !== action.id)
            .map((blog, index) => ({
                ...blog,
                id: index + 1
            }));
        return {
            ...state,
            blogList: updatedBlogList
        }
    })
)

export const blogReducer = (state: any, action: any) => _blogReducer(state, action)