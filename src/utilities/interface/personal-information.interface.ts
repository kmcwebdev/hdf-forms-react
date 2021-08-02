import { ISODateString } from '../types/iso-date.type';

export interface PersonalInformation {
  dateOfVisit: ISODateString;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company: string;
  address: string;
}
