import { IAuthor } from 'app/shared/model/author.model';

export interface IBook {
  id?: number;
  title?: string;
  price?: number;
  author?: IAuthor;
}

export class Book implements IBook {
  constructor(public id?: number, public title?: string, public price?: number, public author?: IAuthor) {}
}
