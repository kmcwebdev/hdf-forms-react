import { Store } from 'src/utilities/interface/store.interface';
import create from 'zustand';

export const useStore = create<Store>((set) => ({
  showForm: false,
  setShowForm: (showForm) => {
    set((state) => ({ ...state, showForm }));
  },
  form: null,
  setForm: (form) => {
    set((state) => ({ ...state, form }));
  },
  personalInformation: null,
  setPersonalInformation: (personalInformation) => {
    set((state) => ({ ...state, personalInformation }));
  },
  authorized: false,
  setAuthorized: (authorize) => {
    set((state) => ({ ...state, authorized: authorize }));
  },
  visitInformation: null,
  setVisitInformation: (visitInformation) => {
    set((state) => ({ ...state, visitInformation }));
  },
  workLocation: null,
  setWorkLocation: (workLocation) => {
    set((state) => ({ ...state, workLocation }));
  },
}));
