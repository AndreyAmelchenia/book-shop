export enum Category {
  fantastic,
  novel,
  detective,
}

export interface BookModel {
  id: string;
  name: string;
  description: string;
  price: number;
  category: keyof typeof Category;
  createDate: number;
  quantity: number;
  isAvailable?: boolean;
}

const books: BookModel[] = [
  {
    id: '1',
    name: 'Eragon',
    description: 'dragon',
    price: 60,
    category: 'novel',
    createDate: 12125235,
    quantity: 1,
  },
  {
    id: '2',
    name: 'ChujaK',
    description: 'super',
    price: 70,
    category: 'fantastic',
    createDate: 12125235,
    quantity: 6,
  },
  {
    id: '3',
    name: 'Eragon 2',
    description: 'dragon',
    price: 200,
    category: 'fantastic',
    createDate: 12125235,
    quantity: 7,
  },
  {
    id: '4',
    name: 'Eragon 3',
    description: 'dragon',
    price: 100,
    category: 'fantastic',
    createDate: 12125235,
    quantity: 5,
  },
  {
    id: '5',
    name: 'Eragon 4',
    description: 'dragon',
    price: 50,
    category: 'fantastic',
    createDate: 12125235,
    quantity: 3,
  },
  {
    id: '6',
    name: 'see you',
    description: 'ok',
    price: 2000,
    category: 'fantastic',
    createDate: 12125235,
    quantity: 0,
  },
];

export class BookService {
  private myBooks: BookModel[] = books.map((el) => ({
    ...el,
    isAvailable: !!el.quantity,
  }));

  getAll(): BookModel[] {
    return this.myBooks;
  }

  removeQuantityBook(id: string): void {
    this.myBooks = this.myBooks.map((el) =>
      el.id === id ? { ...el, quantity: el.quantity - 1, isAvailable: !!(el.quantity - 1) } : el,
    );
  }

  addQuantityBook(id: string): void {
    this.myBooks = this.myBooks.map((el) =>
      el.id === id ? { ...el, quantity: el.quantity + 1, isAvailable: true } : el,
    );
  }

  addAllQuantityBook(id: string, quantity: number): void {
    this.myBooks = this.myBooks.map((el) =>
      el.id === id
        ? {
            ...el,
            quantity: el.quantity + quantity,
            isAvailable: true,
          }
        : el,
    );
  }

  quantityBook(id: string): number {
    return this.myBooks.find((el) => el.id === id).quantity;
  }
}
