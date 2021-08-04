import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { FormState } from '../enum/form-state.enum';
import { WorkType } from '../enum/work-type.enum';
import { PersonalInformation } from './personal-information.interface';
import { VisitInformation } from './visit-information.interface';

export interface Store {
  // States
  email: string | null;
  showForm: boolean;
  form: FormState | null;
  personalInformation: Partial<PersonalInformation> | null;
  visitInformation: VisitInformation | null;
  symptoms: CheckboxValueType[];
  authorized: boolean;
  siteId: number;
  floorId: number;
  workLocation: WorkType | null;

  // Actions
  setEmail: (email: string | null) => void;
  setShowForm: (showForm: boolean) => void;
  setForm: (form: FormState | null) => void;
  setPersonalInformation: (
    personalDetails: Partial<PersonalInformation> | null
  ) => void;
  setVisitInformation: (visitInformation: VisitInformation | null) => void;
  setSymptoms: (symptoms: CheckboxValueType[]) => void;
  setAuthorized: (authorize: boolean) => void;
  setSiteId: (siteId: number) => void;
  setFloorId: (floorId: number) => void;
  setWorkLocation: (workLocation: WorkType | null) => void;
}
