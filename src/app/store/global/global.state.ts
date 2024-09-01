import { blogReducer } from "../blog/blog.reducer";
import { counterReducer } from "../counter/counter.reducer";
import { appReducer } from "./app.reducer";

export const GlobalState = {
    counter: counterReducer,
    blog: blogReducer,
    app: appReducer
}