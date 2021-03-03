import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { BookListComponent } from './book-list/book-list.component';
import { AppComponent } from './app.component';
import { BookNavComponent } from './book-nav/book-nav.component';
import { BookComponent } from './book-list/book/book.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppMaterialModule } from './modules/app-material.module';

import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookNavComponent,
    BookListComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
