import {TypeCustomer} from "./type-customer";

export interface Customer {
  idCustomer ?: number;
  fullName ?: string;
  dayOfBirt ?: string;
  gender ?: boolean;
  document ?: string;
  phone ?: string;
  email ?: string;
  address ?: string;
  typeCustomer ?: TypeCustomer;
}
