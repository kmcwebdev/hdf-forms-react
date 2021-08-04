import { ISODateString } from '../types/iso-date.type';

export interface PersonalInformation {
  visitDate: ISODateString;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  address: string;
  city: string;
}
