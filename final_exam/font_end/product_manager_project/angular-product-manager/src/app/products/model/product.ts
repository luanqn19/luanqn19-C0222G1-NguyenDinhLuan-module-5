import {Catalog} from './catalog';

export interface Product {
  idProduct?: number;
  fromPlace: string;
  toPlace: string;
  dateStart: string;
  price: number;
  amount: number;
  timeStart: string;
  catalog: Catalog;
}
