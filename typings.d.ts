export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    type: string;
    author:{
        name:string;
        image:string;
    };
    categories: [object],
    description:string;
    price:string;
    mainImage:{
        asset:{
            url:string;
        }
    };
    slug: {
        current:string;
    };
    body:[object];

};

export interface Category {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
}