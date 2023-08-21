import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor() {}

  public assets(image: string): string {
    return `/assets/${image}`;
  }
}
