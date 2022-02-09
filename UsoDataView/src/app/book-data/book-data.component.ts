import { Component, OnInit } from '@angular/core';
import { BookDataService, Book } from '../services/book-data.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css'],
})
export class BookDataComponent implements OnInit {
  books!: Book[];
  constructor(private bookService: BookDataService) {}
  ngOnInit() {
    this.bookService.getBooks().then((books) => (this.books = books));
  }
}
