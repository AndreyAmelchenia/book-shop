import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book: BookModel;

  @Output() bookOut = new EventEmitter<BookModel>();

  onBuy(book: BookModel) {
    return this.bookOut.emit(book);
  }
}
