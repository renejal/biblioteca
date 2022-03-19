import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
@Component({
  selector: 'app-book-form',  
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(public book_service: BookService) { 
  }
  ngOnInit(): void {
  }
  addTask(name_book: HTMLInputElement, autor_book: HTMLInputElement, isbn: HTMLInputElement,
    paginas: HTMLInputElement, editorial: HTMLInputElement, fecha_ublicacion: HTMLInputElement, fecha_de_registro: HTMLInputElement){
    this.book_service.addTask({
    titulo: name_book.value,
    autor: autor_book.value,
    isbn: isbn.value,
    paginas: paginas.value,
    editorial: editorial.value,
    fecha_publicacion: fecha_ublicacion.value,
    fecha_de_registro: fecha_de_registro.value});
    console.log(this.book_service.getTask())
    return false
}}
