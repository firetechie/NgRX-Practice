import { Blog } from "../blog";
import { Counter } from "../counter";

export interface AppState {
    counter: Counter,
    blog: Blog
}