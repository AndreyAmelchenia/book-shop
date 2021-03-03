import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { BookModel, BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  public price = 0;

  public quantity = 0;

  public cards: Observable<BookModel[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public myBookService: BookService
  ) {}

  ngOnInit() {
    this.cards = this.cardsInit();
  }

  /** Based on the screen size, switch from standard to one column per row */
  cardsInit() {
    return this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return this.myBookService.getAll();
        }
        return this.myBookService.getAll();
      })
    );
  }

  sumPrise([price, id]: [number, string]) {
    this.price += price;
    this.quantity += 1;
    this.myBookService.removeQuantityBook(id);
    this.cards = this.cardsInit();
  }
}
