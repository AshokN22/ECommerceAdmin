import { Category } from "../categories/Category";

export interface Product{
    pID:number;
    pName:string;
    pCat:Category;
    pRate:number;
    pQuantity:number;
}