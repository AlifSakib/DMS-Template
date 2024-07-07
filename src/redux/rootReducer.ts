import { baseApi } from "./api/baseApi";
import drawerReducer from "./features/drawer/drawerSlice";
import modalReducer from "./features/modal/modalSlice";
import authReducer from "./features/auth/authSlice";
import configurationReducer from "./features/configuration/configurationSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  drawer: drawerReducer,
  modal: modalReducer,
  auth: authReducer,
  configuration : configurationReducer
};
