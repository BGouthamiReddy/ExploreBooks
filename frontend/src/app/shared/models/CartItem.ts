import { book } from "./book";

export class CartItem{
  constructor(public books:book){ }
  quantity:number = 1;
  price: number = this.books.price;
}
