import { Component, OnInit } from '@angular/core';
import { BookModel, BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  public myBook: BookModel;

  constructor(public myBookService: BookService) {}

  ngOnInit() {
    this.myBook = this.myBookService.getAll();
  }

  onBuy(name: string) {
    console.log(this.myBook.name);
    console.log(name);
  }
}
