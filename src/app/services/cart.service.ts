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
      isAvailable: true,
    },
  ];

  cartProduct = (): BookModel[] => this.myCartItems;

  totalQuantity = (): number =>
    this.myCartItems.reduce((quantity, book) => quantity + book.quantity, 0);

  totalSum = (): number =>
    this.myCartItems.reduce((summa, book) => summa + book.price * book.quantity, 0);

  removeBook(book: BookModel): void {
    this.myCartItems = this.myCartItems.filter((el) => el.id !== book.id);
  }

  increaseQuantity(book: BookModel, quantity: number): void {
    if (this.myCartItems.find((el) => el.id === book.id)) {
      this.myCartItems = this.myCartItems.map((item) =>
        book.id === item.id
          ? { ...item, quantity: item.quantity + 1, isAvailable: !!(quantity - 1) }
          : item,
      );
    } else {
      this.myCartItems.push({ ...book, quantity: 1 });
    }
  }

  decreaseQuantity(book: BookModel): void {
    if (this.myCartItems.find((el) => el.id === book.id).quantity === 1) {
      this.myCartItems = this.myCartItems.filter((el) => el.id !== book.id);
    } else {
      this.myCartItems = this.myCartItems.map((item) =>
        book.id === item.id ? { ...item, quantity: item.quantity - 1, isAvailable: true } : item,
      );
    }
  }

  removeAllBooks() {
    this.myCartItems = [];
  }

  updateCartData(): { totalQuantity: number; totalSum: number } {
    return { totalQuantity: this.totalQuantity(), totalSum: this.totalSum() };
  }
}
