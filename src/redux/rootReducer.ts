import { baseApi } from "./api/baseApi";
import drawerReducer from "./features/drawer/drawerSlice";
import modalReducer from "./features/modal/modalSlice";
import authReducer from "./features/auth/authSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  drawer: drawerReducer,
  modal: modalReducer,
  auth: authReducer,
};
