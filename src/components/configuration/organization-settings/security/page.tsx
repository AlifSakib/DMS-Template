import FormInput from "@/components/forms/form-input/form-input";
import FormSelect from "@/components/forms/form-select";
import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Container from "@/components/ui/container";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";
import GuestLoginModal from "./guest-login-modal";
import { useEffect, useState } from "react";
import ChangePassphrase from "./change-passphrase";
import ChangePasswordPolicy from "./change-password-policy";
import ConfigureRestrictedFileTypesModal from "./configure-restricted-file-types/configure-restricted-file-types-modal";

interface IOrganizationSecuritylSettingsProps {
  watch: any;
  setValue: any;
}

const OrganizationSecuritylSettings = ({
  watch,
  setValue,
}: IOrganizationSecuritylSettingsProps) => {
  const isGuestLogin = watch("security.login.guest_login");

  const [isModalOpen, setModalOpen] = useState(false);
  const [isPassphraseOpen, setPassphraseOpen] = useState(false);
  const [openChangePasswordPolicy, setOpenChangePasswordPolicy] =
    useState(false);

  const [
    openConfigureRestrictedFileTypes,
    setOpenConfigureRestrictedFileTypes,
  ] = useState(false);

  useEffect(() => {
    if (isGuestLogin) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [isGuestLogin]);

  const closePassphraseModal = () => {
    setPassphraseOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setValue("security.login.guest_login", false);
  };

  const closePasswordPolicyModal = () => {
    setOpenChangePasswordPolicy(false);
  };

  const closeConfigureRestrictedFileTypes = () => {
    setOpenConfigureRestrictedFileTypes(false);
  };

  return (
    <Container>
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
                setOpenChangePasswordPolicy(true);
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
                  setPassphraseOpen(true);
                }}
              >
                Change passphrase
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle title="Session timeout" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Automatic log out
          </Label>
          <div className="w-full">
            <FormSingleCheckbox
              name="security.session_timeout.autometic_log_out"
              label="Log out automatically after being inactive for"
            />
          </div>
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label
            htmlFor="hrFullName2"
            className="lg:min-w-[260px] lg:text-end "
          ></Label>

          <FormSelect
            id="time"
            size="small"
            name="security.session_timeout.autometic_log_out_time"
            options={[
              { id: "opt1", label: "5 minutes", value: "5" },
              { id: "opt2", label: "10 minutes", value: "10" },
              { id: "opt3", label: "15 minutes", value: "15" },
              { id: "opt4", label: "20 minutes", value: "20" },
              { id: "opt5", label: "25 minutes", value: "25" },
              { id: "opt6", label: "30 minutes", value: "30" },
              { id: "opt7", label: "35 minutes", value: "35" },
              { id: "opt8", label: "40 minutes", value: "40" },
              { id: "opt9", label: "45 minutes", value: "45" },
              { id: "opt10", label: "50 minutes", value: "50" },
              { id: "opt11", label: "55 minutes", value: "55" },
              { id: "opt12", label: "60 minutes", value: "60" },
            ]}
          />
        </div>
      </div>

      <SectionTitle title="Other" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Restricted File Types
          </Label>
          <div className="w-full">
            <p
              className="text-blue-600 underline  cursor-pointer"
              onClick={() => {
                setOpenConfigureRestrictedFileTypes(true);
              }}
            >
              Configure restricted file types
            </p>
          </div>
        </div>
      </div>
      <GuestLoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <ChangePassphrase
        isModalOpen={isPassphraseOpen}
        closeModal={closePassphraseModal}
      />
      <ChangePasswordPolicy
        isModalOpen={openChangePasswordPolicy}
        closeModal={closePasswordPolicyModal}
      />
      <ConfigureRestrictedFileTypesModal
        isModalOpen={openConfigureRestrictedFileTypes}
        closeModal={closeConfigureRestrictedFileTypes}
      />
    </Container>
  );
};

export default OrganizationSecuritylSettings;
