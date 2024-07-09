import Container from "@/components/ui/container";
import { useEffect, useState } from "react";
import ChangePassphrase from "./change-passphrase/change-passphrase";
import ChangePasswordPolicy from "./change-password-policy/change-password-policy";
import ConfigureRestrictedFileTypesModal from "./configure-restricted-file-types/configure-restricted-file-types-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  hideModal,
  showModal,
} from "@/redux/features/organizational-settings/organizational-slice";
import GuestLogin from "./guest-login/guest-login";
import Others from "./form-sections/others";
import SessionAndTimeout from "./form-sections/session-and-timeout";
import Passwords from "./form-sections/passwords";
import Login from "./form-sections/login";
import { IOrganizationSecuritylSettingsProps } from "../types";

const OrganizationSecuritylSettings = ({
  watch,
  setValue,
}: IOrganizationSecuritylSettingsProps) => {
  const dispatch = useDispatch();
  const organizationalState = useSelector(
    (state: RootState) => state.organizationalSettings
  );
  const isGuestLogin = watch("security.login.guest_login");

  useEffect(() => {
    if (isGuestLogin) {
      dispatch(showModal("guestLogin"));
    } else {
      dispatch(hideModal("guestLogin"));
    }
  }, [isGuestLogin, dispatch]);

  const closeModal = (modalName: keyof RootState["organizationalSettings"]) => {
    dispatch(hideModal(String(modalName)));
    if (modalName === "guestLogin") {
      setValue("security.login.guest_login", false);
    }
  };

  return (
    <Container>
      <Login watch={watch} setValue={setValue} />
      <Passwords />
      <SessionAndTimeout />
      <Others />
      <GuestLogin
        isModalOpen={organizationalState.guestLogin}
        closeModal={() => closeModal("guestLogin")}
      />
      <ChangePassphrase
        isModalOpen={organizationalState.passphrase}
        closeModal={() => closeModal("passphrase")}
      />
      <ChangePasswordPolicy
        isModalOpen={organizationalState.configurePasswordPolicy}
        closeModal={() => closeModal("configurePasswordPolicy")}
      />
      <ConfigureRestrictedFileTypesModal
        isModalOpen={organizationalState.configureRestrictedFileTypes}
        closeModal={() => closeModal("configureRestrictedFileTypes")}
      />
    </Container>
  );
};

export default OrganizationSecuritylSettings;
