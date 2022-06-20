export interface Post {
    _id: string;
    _createdAt: string;
    title: string;
    en_title: string;
    es_title: string;
    type: string;
    author:{
        name:string;
        image:string;
    };
    categories: [object],
    desc:string;
    en_desc:string;
    es_desc:string;
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
    en_title: string;
    es_title: string;
    slug: string;
}