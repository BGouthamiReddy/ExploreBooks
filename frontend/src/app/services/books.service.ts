import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_books, sample_tags } from 'src/data';
import { BOOKS_BY_ID_URL, BOOKS_BY_SEARCH_URL, BOOKS_BY_TAG_URL, BOOKS_TAGS_URL, BOOKS_URL } from '../shared/constants/urls';
import { book } from '../shared/models/book';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getAll(): Observable< book[]>{
    return this.http.get<book[]>(BOOKS_URL);
  }

  getAllBooksBySearchTerm(searchTerm:string){
    return this.http.get<book[]>(BOOKS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable <Tag[]>{
    return this.http.get<Tag[]>(BOOKS_TAGS_URL);
  }
  getAllBooksByTag(tag:string):Observable<book[]>{
    return tag ==="All"?
    this.getAll():
    this.http.get<book[]>(BOOKS_BY_TAG_URL+tag);

  }
getBooksById(bookId:string):Observable<book>{
 return this.http.get<book>(BOOKS_BY_ID_URL+bookId);
}

}
