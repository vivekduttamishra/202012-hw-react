

export interface Book{
    _id?:string;
    isbn:string;
    title:string;
    author:string;
    pages:number;
    price:number;
    rating:number;
    votes:number;
    description:string;
    tags:string[];
    series?:string;
    seriesIndex?:number;
    releaseDate?:Date;
    cover:string;
}