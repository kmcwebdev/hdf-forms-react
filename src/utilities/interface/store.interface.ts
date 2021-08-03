import { FormState } from '../enum/form-state.enum';
import { WorkType } from '../enum/work-type.enum';
import { PersonalInformation } from './personal-information.interface';
import { VisitInformation } from './visit-information.interface';

export interface Store {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
  form: FormState | null;
  setForm: (form: FormState | null) => void;
  personalInformation: Partial<PersonalInformation> | null;
  setPersonalInformation: (
    personalDetails: Partial<PersonalInformation> | null
  ) => void;
  authorized: boolean;
  setAuthorized: (authorize: boolean) => void;
  visitInformation: Partial<VisitInformation> | null;
  setVisitInformation: (
    visitInformation: Partial<VisitInformation> | null
  ) => void;
  workLocation: WorkType | null;
  setWorkLocation: (workLocation: WorkType | null) => void;
}
