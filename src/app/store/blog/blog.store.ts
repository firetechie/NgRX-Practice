import { Blogs } from "../../shared/model/blog";

export const initialState: Blogs = {
    blogList: [
        {
            id: 1,
            title: "NgRX",
            description: "learning"
        },
        {
            id: 2,
            title: "RxJS",
            description: "learning"
        },
        {
            id: 3,
            title: "Signals",
            description: "learning"
        }
    ]
}