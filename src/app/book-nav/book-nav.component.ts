import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-book-nav',
  templateUrl: './book-nav.component.html',
  styleUrls: ['./book-nav.component.scss'],
})
export class BookNavComponent implements AfterViewInit {
  @ViewChild('appTitle') appTitle!: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = 'BOOK SHOP';
  }
}
