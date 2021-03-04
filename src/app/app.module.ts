import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { BookListComponent } from './book-list/book-list.component';
import { AppComponent } from './app.component';
import { BookNavComponent } from './book-nav/book-nav.component';
import { BookComponent } from './book-list/book/book.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppMaterialModule } from './modules/app-material.module';

import { BookService } from './services/book.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    BookNavComponent,
    BookListComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  providers: [BookService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
