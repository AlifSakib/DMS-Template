"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Modal, Title } from "rizzui";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUserSchema } from "@/schemas/login-user/login-user";
import FormInput from "@/components/forms/form-input/form-inout";
import TimeSelect from "@/components/forms/form-time-select";
import FormRadio from "@/components/forms/form-radio";
import FormSelect from "@/components/forms/form-select";
import FormCheckbox from "@/components/forms/form-checkbox";
import ColorSelect from "@/components/forms/color-select";

export default function Home() {
  type FormValues = {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    registration: string;
    roles: string;
    title: string;
  };
  const methods = useForm({
    resolver: yupResolver(loginUserSchema),
    defaultValues: {
      username: "",
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      registration: "",
      roles: "",
      color: "green",
    },
  });
  const { handleSubmit, trigger } = methods;
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <Title>Start Building your App</Title>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            name="username"
            type="text"
            size="small"
            label="Username"
            placeholder="Enter your username"
            // required
          />
          <FormSelect
            name="title"
            label="Tite"
            id="select-title"
            placeholder="Select your title"
            options={[
              { id: "1", value: "mr", label: "Mr." },
              { id: "2", value: "ms", label: "Ms." },
            ]}
          />
          <FormRadio
            name="registration"
            label="Gender"
            options={[
              {
                id: "1",
                label:
                  "Request user by email to activate account and set password",
                value: "false",
              },
              { id: "2", label: "Set password now", value: "true" },
            ]}
            // required
          />
          <FormCheckbox
            name="roles"
            label="Roles"
            options={[{ id: "1", label: "Admin", value: "admin" }]}
            // required
          />
          <ColorSelect
            name="color"
            label="Color"

            // required
          />
          <button
            type="submit"
            onClick={() => {
              trigger();
            }}
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </>
  );
}
