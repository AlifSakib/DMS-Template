// redux/features/modals/modalsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  [key: string]: boolean;
}

const initialState: ModalState = {};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    hideModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = false;
    },
  },
});

export const { showModal, hideModal } = modalsSlice.actions;
export default modalsSlice.reducer;
