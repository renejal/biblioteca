import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import { book } from '../../models/book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: book[] = []; 
  constructor(    
  public book_service: BookService
  ) { }

  ngOnInit(): void {
    this.books = this.book_service.getTask();
  }

}
