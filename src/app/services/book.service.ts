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
  isAvailable: boolean;
  quantity: number;
}

export class BookService {
  private myBooks: BookModel[] = [
    {
      id: '1',
      name: 'Eragon',
      description: 'dragon',
      price: 60,
      category: 'novel',
      createDate: 12125235,
      isAvailable: true,
      quantity: 1,
    },
    {
      id: '2',
      name: 'ChujaK',
      description: 'super',
      price: 70,
      category: 'fantastic',
      createDate: 12125235,
      isAvailable: false,
      quantity: 6,
    },
    {
      id: '3',
      name: 'Eragon 2',
      description: 'dragon',
      price: 200,
      category: 'fantastic',
      createDate: 12125235,
      isAvailable: true,
      quantity: 7,
    },
    {
      id: '4',
      name: 'Eragon 3',
      description: 'dragon',
      price: 100,
      category: 'fantastic',
      createDate: 12125235,
      isAvailable: true,
      quantity: 5,
    },
    {
      id: '5',
      name: 'Eragon 4',
      description: 'dragon',
      price: 50,
      category: 'fantastic',
      createDate: 12125235,
      isAvailable: true,
      quantity: 3,
    },
    {
      id: '6',
      name: 'see you',
      description: 'ok',
      price: 2000,
      category: 'fantastic',
      createDate: 12125235,
      isAvailable: false,
      quantity: 0,
    },
  ];

  getAll(): BookModel[] {
    return this.myBooks;
  }

  removeQuantityBook(id: string): BookModel[] {
    return this.myBooks.map((el) =>
      el.id === id ? { ...el, quantity: el.quantity - 1 } : el
    );
  }
}
