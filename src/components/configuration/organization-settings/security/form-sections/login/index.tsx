import FormInput from "@/components/forms/form-input/form-input";
import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";
import { IOrganizationSecuritylSettingsProps } from "../../../types";

const Login = ({ watch, setValue }: IOrganizationSecuritylSettingsProps) => {
  const isGuestLogin = watch("security.login.guest_login");
  return (
    <>
      <SectionTitle title="Login" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Single Sign-On
          </Label>
          <div className="w-full">
            <FormSingleCheckbox
              name="security.login.single_sign_on"
              label="Enable single sign-on with your identity provider"
            />
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Guest Login
          </Label>
          <div className="w-full">
            <FormSingleCheckbox
              name="security.login.guest_login"
              label="Enable to log in as a guest with a predefined DocuWare user"
            />
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label
            htmlFor="hrFullName2"
            className="lg:min-w-[260px] lg:text-end"
          ></Label>
          <div className="flex items-center gap-4">
            <FormInput
              name="security.login.change_user"
              placeholder="No user specified"
              size="large"
              disabled={!isGuestLogin}
            />
            <div className="w-[300px]">
              <button
                type="button"
                disabled={isGuestLogin}
                className={`${
                  !isGuestLogin
                    ? "text-gray-500 cursor-pointer"
                    : "text-blue-600 underline cursor-pointer"
                }`}
              >
                Change user
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
