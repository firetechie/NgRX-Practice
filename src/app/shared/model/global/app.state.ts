import { Blogs } from "../blog";
import { Counter } from "../counter";

export interface AppState {
    counter: Counter,
    blog: Blogs
}