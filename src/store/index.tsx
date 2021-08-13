import { Store } from 'src/utilities/interface/store.interface';
import create from 'zustand';

export const useStore = create<Store>((set) => ({
  // State
  email: null,
  showForm: false,
  form: null,
  personalInformation: null,
  visitInformation: null,
  symptoms: { questionId: 1, answers: ['None of the above'] },
  hdfQ2: { questionId: 2, answers: ['No'] },
  hdfQ3: { questionId: 3, answers: ['No'] },
  hdfQ4: { questionId: 4, answers: ['No'] },
  authorized: false,
  siteId: 0,
  floorId: 0,
  visitId: null,
  workType: null,

  // Actions
  setEmail: (email) => {
    return set((state) => ({ ...state, email }));
  },
  setShowForm: (showForm) => {
    return set((state) => ({ ...state, showForm }));
  },
  setForm: (form) => {
    return set((state) => ({ ...state, form }));
  },
  setPersonalInformation: (personalInformation) => {
    return set((state) => ({ ...state, personalInformation }));
  },
  setVisitInformation: (visitInformation) => {
    return set((state) => ({ ...state, visitInformation }));
  },
  setSymptoms: (symptoms) => {
    return set((state) => ({ ...state, symptoms }));
  },
  setHdfQ2: (hdfQ2) => {
    return set((state) => ({ ...state, hdfQ2 }));
  },
  setHdfQ3: (hdfQ3) => {
    return set((state) => ({ ...state, hdfQ3 }));
  },
  setHdfQ4: (hdfQ4) => {
    return set((state) => ({ ...state, hdfQ4 }));
  },
  setAuthorized: (authorize) => {
    return set((state) => ({ ...state, authorized: authorize }));
  },
  setSiteId: (siteId) => {
    return set((state) => ({ ...state, siteId }));
  },
  setFloorId: (floorId) => {
    return set((state) => ({ ...state, floorId }));
  },
  setVisitId: (visitId) => {
    return set((state) => ({ ...state, visitId }));
  },
  setWorkType: (workType) => {
    return set((state) => ({ ...state, workType }));
  },
}));
