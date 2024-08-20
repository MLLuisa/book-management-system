import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  newTitle: string = '';
  newAuthor: string = '';
  books: Book[] = [];

  constructor() { }

  ngOnInit(): void {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

  /**
   * Aggiunge un libro.
   */
  addBook() {
    if (this.newTitle.trim().length && this.newAuthor.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.newTitle,
        author: this.newAuthor,
      }
      this.books.push(newBook);

      this.newTitle = '';
      this.newAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
     }
  }

  /**
   * Elimina un libro.
   */
  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

}
