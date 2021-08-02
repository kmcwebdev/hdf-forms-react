import { PersonalInformation } from './personal-information.interface';

export enum FormState {
  Member = 'Member',
  Event = 'Event',
  Guest = 'Guest',
}

export enum WorkType {
  'On site' = 'On site',
  'Work from home' = 'Work from home',
  'On leave' = 'On leave',
}

export interface Store {
  form: FormState | null;
  setForm: (form: FormState | null) => void;
  personalInformation: PersonalInformation | null;
  setPersonalInformation: (personalDetails: PersonalInformation | null) => void;
  authorized: boolean;
  setAuthorized: (authorize: boolean) => void;
  workLocation: WorkType | null;
  setWorkLocation: (workLocation: WorkType | null) => void;
}
