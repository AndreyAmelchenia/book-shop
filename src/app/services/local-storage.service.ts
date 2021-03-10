import { Injectable } from '@angular/core';

type LocalObject = {
  key: string;
  type?: 'str' | 'obj';
  value?: string;
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem({ key, type, value }: LocalObject) {
    window.localStorage.setItem(
      key,
      type === 'obj' ? JSON.stringify(value) : type === 'str' && value,
    );
  }

  getItem({ key, type }: LocalObject) {
    const value = window.localStorage.getItem(key);
    return type === 'obj' ? JSON.parse(value) : type === 'str' && value;
  }

  removeItem({ key }: LocalObject) {
    window.localStorage.removeItem(key);
  }
}
