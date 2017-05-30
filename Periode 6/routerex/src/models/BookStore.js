//DataStore for this Demo
import {observable, useStrict, action } from 'mobx';
class BookStore {
@observable _books = [];

  constructor() {
    //this._books = []; 
    this.fetchBooks();
  }
  get books(){
    return this._books;
  }

  /*subscribe(observer) {
      this._observer = observer;
  }*/
  @action
  changeBooks(books) {
    this._books.replace(books);
  }

  @action
  addBook(book) {
    this._books.push(book);
  }

  getBook(book) {
    this._books.find(book);
  }

  fetchBooks() {
      fetch("http://localhost:7777/books")
      .then((response)=> {
        return response.json()
      })
      .then((response)=> {
           this.changeBooks(response);
         /* if(this._observer) {
              this._observer.dataReady();
          }
          console.log(JSON.stringify(response)); */
      })
  }

}

let store = new BookStore();
window.store = store;

export default store;