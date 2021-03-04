import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BookModel } from 'src/app/services/book.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() book: BookModel;

  @Output() addItem = new EventEmitter<BookModel>();

  @Output() minesItem = new EventEmitter<BookModel>();

  @Output() removeItem = new EventEmitter<BookModel>();

  onAddItem(book: BookModel) {
    return this.addItem.emit(book);
  }

  onMinesItem(book: BookModel) {
    return this.minesItem.emit(book);
  }

  onRemoveItem(book: BookModel) {
    return this.removeItem.emit(book);
  }
}
