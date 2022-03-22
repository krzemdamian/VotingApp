import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNameGeneratorService {

  constructor() { }

  public generateName(length: number) {
    let res = '';

    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * 27);
        res += String.fromCharCode(97 + random);
    };
    return res;
  }
}
