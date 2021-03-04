import { BookModel } from './book.service';

export class CartService {
  private myCartItems: BookModel[] = [
    {
      id: '1',
      name: 'Eragon',
      description: 'dragon',
      price: 60,
      category: 'novel',
      createDate: 12125235,
      quantity: 1,
    },
  ];

  getAll = (): BookModel[] => this.myCartItems;

  removeCartItem(book: BookModel): void {
    this.myCartItems = this.myCartItems.filter((el) => el.id !== book.id);
  }

  addCartItem(book: BookModel): void {
    if (this.myCartItems.find((el) => el.id === book.id)) {
      this.myCartItems = this.myCartItems.map((item) =>
        book.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      this.myCartItems.push(book);
    }
  }

  minusCartItem(book: BookModel): void {
    if (this.myCartItems.find((el) => el.id === book.id).quantity === 1) {
      this.myCartItems = this.myCartItems.filter((el) => el.id !== book.id);
    } else {
      this.myCartItems = this.myCartItems.map((item) =>
        book.id === item.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  }
}
