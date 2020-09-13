export class BlogPost {
    status: string[];
  // tslint:disable-next-line:variable-name
    _id: string;
    content: string;
    title: string;
    author: string;
  // tslint:disable-next-line:variable-name
    Created_date: string;

    // assign vals from json to properties
    constructor(values: object = {}) {
        Object.assign(this, values);
    }
}
