// redux/features/modal/modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  view: React.ReactNode | null;
  customSize?: string;
}

const initialState: ModalState = {
  isOpen: false,
  view: null,
  customSize: "320px",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ view: React.ReactNode; customSize?: string }>
    ) => {
      const { view, customSize } = action.payload;
      state.isOpen = true;
      state.view = view;
      state.customSize = customSize;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
