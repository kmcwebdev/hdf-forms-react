import { Store } from 'src/utilities/interface/store.interface';
import create from 'zustand';

export const useStore = create<Store>((set) => ({
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
  workLocation: null,
  setWorkLocation: (workLocation) => {
    set((state) => ({ ...state, workLocation }));
  },
}));
