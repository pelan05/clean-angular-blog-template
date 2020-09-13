export class BlogPost {
    status: string[];
    id: string;
    content: string;
    title: string;
    author: string;
    createdDate: string;

    // assign vals from json to properties
    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
