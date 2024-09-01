import { createReducer, on } from '@ngrx/store';
import { initialState } from './blog.store';
import { addBlogSuccess, deleteBlogSuccess, loadBlog, loadBlogFail, loadBlogSuccess, updateBlogSuccess } from './blog.action';
import { Blog } from '../../shared/model/blog';

const _blogReducer = createReducer(initialState,
    on(loadBlog, (state) => {
        return { ...state }
    }),
    on(loadBlogSuccess, (state, action) => {
        return {
            ...state,
            blogList: [...action.blogList],
            errorMessage: ''
        }
    }),
    on(loadBlogFail, (state, action) => {
        return {
            ...state,
            blogList: [],
            errorMessage: action.errorMessage
        }
    }),
    // on(addBlog, (state, action) => {
    //     const blog = { ...action.blogInput }
    //     blog.id = state.blogList.length + 1
    //     return {
    //         ...state,
    //         blogList: [...state.blogList, blog]
    //     }
    // }),
    on(addBlogSuccess, (state, action) => {
        const blog = { ...action.blogInput }
        return {
            ...state,
            blogList: [...state.blogList, blog]
        }
    }),
    on(updateBlogSuccess, (state, action) => {
        const _blog = action.blogInput
        const updatedBlog = state.blogList.map((blog: Blog) => _blog.id === blog.id ? _blog : blog)
        return {
            ...state,
            blogList: updatedBlog
        }
    }),
    on(deleteBlogSuccess, (state, action) => {
        const updatedBlogList = state.blogList
            .filter((blog) => blog.id !== action.id)
            .map((blog, index) => ({
                ...blog,
                id: index + 1 // Reassign the ID to be sequential
            }));
        return {
            ...state,
            blogList: updatedBlogList
        }
    })
)

export const blogReducer = (state: any, action: any) => _blogReducer(state, action)