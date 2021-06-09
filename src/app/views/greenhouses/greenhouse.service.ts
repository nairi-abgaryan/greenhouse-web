import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GreenhouseService {
  constructor(private httpClient: HttpClient) {}

  public getGreenHouses() {
    return [
      {
        id: 1
      },
      {
        id: 2
      }
    ];
  }

  public getGreenHouse(id: number) {
    return this.httpClient.get('/something');
  }
}
