import { Injectable } from '@angular/core';
import {book} from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: book[];
  constructor() {
    this.book = [
    {titulo: "rene",
    autor: "jalvin",
    isbn: "23",
    paginas: "23", 
    editorial: "semana", 
    fecha_publicacion: "23/12/12", 
    fecha_de_registro: "12/12/2020"}];
  }

  getTask(){
    return this.book;
  }
  addTask(books: book){
    this.book.push(books)
  }
  deleteBook(task: book) {
    for (let i = 0; i < this.book.length; i++) {
      if (task == this.book[i]) {
        this.book.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.book));
      }
    }
  }
}
