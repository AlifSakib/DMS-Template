import * as yup from "yup";

export const loginUserSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
});
