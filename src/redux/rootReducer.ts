import { baseApi } from "./api/baseApi";
import drawerReducer from "./features/drawer/drawerSlice";
import authReducer from "./features/auth/authSlice";
import configurationReducer from "./features/configuration/configurationSlice";
import organizationReducer from "./features/organizational-settings/organizational-slice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  drawer: drawerReducer,
  auth: authReducer,
  configuration: configurationReducer,
  organizationalSettings: organizationReducer,
};
