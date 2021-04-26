import { Injectable } from '@angular/core';
import DOGS from './dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private dogData = DOGS;

  constructor() { }

  get(search_id: string) {
    let dog_parse;

    // console.log(dog_parse);

    dog_parse = this.dogData.filter(
      data => data.id == search_id
    );

    // console.log(dog_parse);

    return dog_parse;
  }

  all() {
    return this.dogData;
  }
}
