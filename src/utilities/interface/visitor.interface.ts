import { ISODateString } from '../types/iso-date.type';

export interface Visitor {
  id: number;
  isBlocked: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  company: string;
  dateCreated: ISODateString;
  timeCreated: ISODateString;
}
