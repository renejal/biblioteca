import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './component/book/book.component';
import { BookFormComponent } from './component/book-form/book-form.component';
import { BookListComponent } from './component/book-list/book-list.component';
import { AppNavigationComponent } from './component/app-navigation/app-navigation.component';
import { LoginComponent } from './component/login/login.component';
import {BookService} from './services/book.service';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookFormComponent,
    BookListComponent,
    AppNavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
