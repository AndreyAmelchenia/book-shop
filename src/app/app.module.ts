import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { BookListComponent } from './book-list/book-list.component';
import { AppMaterialModule } from './modules/app-material.module';
import { AppComponent } from './app.component';
import { BookNavComponent } from './book-nav/book-nav.component';
import { AppRoutingModule } from './modules/app-routing.module';

@NgModule({
  declarations: [AppComponent, BookNavComponent, BookListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
