// redux/features/modals/modalsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  [key: string]: boolean;
}

const initialState: ModalState = {
  guestLogin: false,
  passphrase: false,
  configurePasswordPolicy: false,
  configureRestrictedFileTypes: false,
};

const organizationalSlice = createSlice({
  name: "organizationalSettings",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = true;
    },
    hideModal: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = false;
    },
  },
});

export const { showModal, hideModal } = organizationalSlice.actions;
export default organizationalSlice.reducer;
