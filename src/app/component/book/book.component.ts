import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';
import { book } from '../../models/book';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() books: book;
  constructor(public BookService: BookService ) { }

  ngOnInit(): void {
  }
  deleteBook(book: book) {
    if(confirm('Are you sure you want to delete this task?')) {
      this.BookService.deleteBook(book);
    }
  }

}
