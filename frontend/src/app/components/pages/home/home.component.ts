import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:book[] = [];
  constructor(private booksService:BooksService, activaedRoute:ActivatedRoute) {
    let booksObservable:Observable<book[]>;
    activaedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      booksObservable = this.booksService.getAllBooksBySearchTerm(params.searchTerm);
      else if(params.tag)
      booksObservable = this.booksService.getAllBooksByTag(params.tag);
      else
      booksObservable = booksService.getAll();

      booksObservable.subscribe((serverBooks) =>{
        this.books=serverBooks;
      })
    })
  }
  ngOnInit(): void {
  }

}
