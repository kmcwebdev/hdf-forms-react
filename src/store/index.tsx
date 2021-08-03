import { Store } from 'src/utilities/interface/store.interface';
import create from 'zustand';

export const useStore = create<Store>((set) => ({
  // State
  email: null,
  showForm: false,
  form: null,
  personalInformation: null,
  authorized: false,
  siteId: 0,
  floorId: 0,
  workLocation: null,

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
  setAuthorized: (authorize) => {
    return set((state) => ({ ...state, authorized: authorize }));
  },
  setSiteId: (siteId: number) => {
    return set((state) => ({ ...state, siteId }));
  },
  setFloorId: (floorId: number) => {
    return set((state) => ({ ...state, floorId }));
  },
  setWorkLocation: (workLocation) => {
    return set((state) => ({ ...state, workLocation }));
  },
}));
