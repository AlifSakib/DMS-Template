import FormInput from "@/components/forms/form-input/form-input";
import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";
import { showModal } from "@/redux/features/organizational-settings/organizational-slice";
import { useDispatch } from "react-redux";

const Passwords = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SectionTitle title="Passwords" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Password Policy
          </Label>
          <div className="w-full">
            <FormSingleCheckbox
              name="security.passwords.password_policy"
              label="Enforce a password policy for DocuWare passwords"
            />

            <p
              className="text-blue-600 underline ml-10 cursor-pointer"
              onClick={() => {
                dispatch(showModal("configurePasswordPolicy"));
              }}
            >
              Configure password policy
            </p>
          </div>
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Passphrase
          </Label>
          <div className="flex items-center gap-4">
            <FormInput
              name="security.passwords.passphrase"
              placeholder="Demo Passphase"
              size="large"
              disabled
            />
            <div className="w-[300px] cursor-pointer">
              <p
                className="text-blue-600 underline ml-10 cursor-pointer"
                onClick={() => {
                  dispatch(showModal("passphrase"));
                }}
              >
                Change passphrase
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Passwords;
