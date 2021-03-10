import { Component, Injector, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { BookModel, BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';
import { App, NAME_APP_VERSION } from '../services/constants.service';
import { GeneratorServiceService } from '../services/generator-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cards: Observable<BookModel[]>;

  public config: App;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public myCartService: CartService,
    public myBookService: BookService,
    public gen: GeneratorServiceService,
    public injector: Injector,
  ) {
    this.config = injector.get(NAME_APP_VERSION);
  }

  ngOnInit() {
    this.cards = this.cardsInit();
    console.log(this.config);
    console.log(this.gen.generatorFactory(20));
  }

  /** Based on the screen size, switch from standard to one column per row */
  cardsInit = () =>
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map(({ matches }) =>
          matches ? this.myCartService.cartProduct() : this.myCartService.cartProduct(),
        ),
      );

  addBook(book: BookModel) {
    this.myCartService.increaseQuantity(book, this.myBookService.quantityBook(book.id));
    this.cards = this.cardsInit();
    this.myBookService.removeQuantityBook(book.id);
  }

  minesBook(book: BookModel) {
    this.myCartService.decreaseQuantity(book);
    this.cards = this.cardsInit();
    this.myBookService.addQuantityBook(book.id);
  }

  removeBook(book: BookModel) {
    this.myCartService.removeBook(book);
    this.cards = this.cardsInit();
    this.myBookService.addAllQuantityBook(book.id, book.quantity);
  }
}
