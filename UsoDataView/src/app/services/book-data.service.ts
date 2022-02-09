import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Book {
  name: string;
  price: number;
  author: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http
      .get<any>('assets/books.json')
      .toPromise()
      .then((res) => <Book[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
