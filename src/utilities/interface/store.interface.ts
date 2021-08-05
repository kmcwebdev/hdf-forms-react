import { FormState } from '../enum/form-state.enum';
import { PersonalInformation } from './personal-information.interface';
import { QResponse } from './question.interface';
import { VisitInformation } from './visit-information.interface';
import { WorkType } from './work-type.interface';

export interface Store {
  // States
  email: string | null;
  showForm: boolean;
  form: FormState | null;
  personalInformation: Partial<PersonalInformation> | null;
  visitInformation: VisitInformation | null;
  symptoms: QResponse;
  hdfQ2: QResponse;
  hdfQ3: QResponse;
  hdfQ4: QResponse;
  authorized: boolean;
  siteId: number;
  floorId: number;
  workType: WorkType | null;

  // Actions
  setEmail: (email: string | null) => void;
  setShowForm: (showForm: boolean) => void;
  setForm: (form: FormState | null) => void;
  setPersonalInformation: (
    personalDetails: Partial<PersonalInformation> | null
  ) => void;
  setVisitInformation: (visitInformation: VisitInformation | null) => void;
  setSymptoms: (symptoms: QResponse) => void;
  setHdfQ2: (hdfQ2: QResponse) => void;
  setHdfQ3: (hdfQ3: QResponse) => void;
  setHdfQ4: (hdfQ4: QResponse) => void;
  setAuthorized: (authorize: boolean) => void;
  setSiteId: (siteId: number) => void;
  setFloorId: (floorId: number) => void;
  setWorkType: (workType: WorkType | null) => void;
}
