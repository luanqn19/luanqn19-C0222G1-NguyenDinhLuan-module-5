import {Injectable} from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  listWord: Iword[] = [
    {word: "Mouse", mean: "Con Chuột"},
    {word: "Dog", mean: "Con Chó"},
    {word: "Cat", mean: "Con Mèo"},
    {word: "Lion", mean: "Con Sư tử"},
    {word: "Duck", mean: "Con Vịt"}
  ];

  constructor() {
  }

  translate(w: string): string {
    let mean;
    this.listWord.forEach(items => {
      if (items.word === w) {
        console.log(items.mean);
        mean = items.mean;
      }
    })
    return mean;
  }

  getAllList() : Iword[] {
    return this.listWord;
  }
}
