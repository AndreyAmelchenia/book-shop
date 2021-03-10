import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { BookModel, BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  public cards: Observable<BookModel[]>;

  public price: number;

  public quantity: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public myBookService: BookService,
    public myCartService: CartService,
  ) {}

  ngOnInit() {
    this.cards = this.cardsInit();
    const carts = this.myCartService.cartProduct();
    this.price =
      carts.length !== 0 ? carts.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
    this.quantity = carts.length !== 0 ? carts.reduce((acc, item) => acc + item.quantity, 0) : 0;
  }

  /** Based on the screen size, switch from standard to one column per row */
  cardsInit = () =>
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(({ matches }) => (matches ? this.myBookService.getAll() : this.myBookService.getAll())),
      );

  sumPrise(book: BookModel) {
    const carts = this.myCartService.cartProduct();
    this.price =
      carts.length !== 0 ? carts.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
    this.quantity = carts.length !== 0 ? carts.reduce((acc, item) => acc + item.quantity, 0) : 0;
    this.myCartService.increaseQuantity(book, book.quantity);
    this.myBookService.removeQuantityBook(book.id);
    this.cards = this.cardsInit();
  }
}
