import { blogReducer } from "../blog/blog.reducer";
import { counterReducer } from "../counter/counter.reducer";

export const appState = {
    counter: counterReducer,
    blog: blogReducer
}