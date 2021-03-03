import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book: BookModel;

  @Output() bookOut = new EventEmitter<[number, string]>();

  onBuy(id: string) {
    return this.bookOut.emit([this.book.price, id]);
  }
}
