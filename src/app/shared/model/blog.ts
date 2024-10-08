export interface Blog {
    id: number,
    title: string,
    description: string
}

export interface Blogs {
    blogList: Blog[],
    errorMessage: string
}
