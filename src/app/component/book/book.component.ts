import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';
import { book } from '../../models/book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() books: book;
  constructor() { }

  ngOnInit(): void {
  }

}
