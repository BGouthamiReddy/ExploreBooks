import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css'],
})
export class BookPageComponent implements OnInit {
  book!: book;
  constructor(
    activatedRoute: ActivatedRoute,
    booksService: BooksService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) booksService.getBooksById(params.id).subscribe(serverBook =>{
        this.book = serverBook;
      });
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page');
  }
}
