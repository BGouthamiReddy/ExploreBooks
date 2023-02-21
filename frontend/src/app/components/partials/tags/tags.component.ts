import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
tags?:Tag[];
  constructor(booksService:BooksService) {
    booksService.getAllTags().subscribe(serverTag =>{
      this.tags= serverTag;
    });
  }

  ngOnInit(): void {
  }

}
