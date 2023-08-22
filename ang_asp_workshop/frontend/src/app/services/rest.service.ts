import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor() {}

  public assets(image: string): string {
    return `/assets/${image}`;
  }

  public get isLoggedIn(): boolean {
    // return localStorage.getItem(environment.token) != null;
    return false;
  }
}
