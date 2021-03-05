import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { BookModel, BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cards: Observable<BookModel[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public myCartService: CartService,
    public myBookService: BookService,
  ) {}

  ngOnInit() {
    this.cards = this.cardsInit();
  }

  /** Based on the screen size, switch from standard to one column per row */
  cardsInit = () =>
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(({ matches }) => (matches ? this.myCartService.getAll() : this.myCartService.getAll())),
      );

  addBook(book: BookModel) {
    this.myCartService.addCartItem(book, this.myBookService.quantityBook(book.id));
    this.cards = this.cardsInit();
    this.myBookService.removeQuantityBook(book.id);
  }

  minesBook(book: BookModel) {
    this.myCartService.minusCartItem(book);
    this.cards = this.cardsInit();
    this.myBookService.addQuantityBook(book.id);
  }

  removeBook(book: BookModel) {
    this.myCartService.removeCartItem(book);
    this.cards = this.cardsInit();
    this.myBookService.addAllQuantityBook(book.id, book.quantity);
  }
}
