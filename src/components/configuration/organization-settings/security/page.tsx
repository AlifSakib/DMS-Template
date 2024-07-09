import FormCheckbox from "@/components/forms/form-checkbox";
import FormInput from "@/components/forms/form-input/form-input";
import FormSelect from "@/components/forms/form-select";
import Container from "@/components/ui/container";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";
import { Title } from "rizzui";

const OrganizationSecuritylSettings = () => {
  return (
    <Container>
      <SectionTitle title="Login" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Single Sign-On
          </Label>
          <div className="w-full">
            <FormCheckbox
              name="single-sign-on"
              options={[
                {
                  id: "opt1",
                  label: "Enable single sign-on with your identity provider",
                  value: "false",
                },
                // Add more options as needed
              ]}
              label="Enable single sign-on with your identity provider"
            />
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Guest Login
          </Label>
          <div className="w-full">
            <FormCheckbox
              name="guest-login"
              options={[
                {
                  id: "opt1",
                  label:
                    "Enable to log in as a guest with a predefined DocuWare user",
                  value: "false",
                },
                // Add more options as needed
              ]}
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
              name="change user"
              placeholder="No user specified"
              size="large"
            />
            <div className="w-[300px]">
              <Title as="h6" fontWeight="normal">
                Change user
              </Title>
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
            <FormCheckbox
              name="password-policy"
              options={[
                {
                  id: "opt1",
                  label: "Enforce a password policy for DocuWare passwords",
                  value: "false",
                },
                // Add more options as needed
              ]}
              label="Password Policy"
            />
          </div>
        </div>

        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Passphrase
          </Label>
          <div className="flex items-center gap-4">
            <FormInput
              name="passphrase"
              placeholder="Demo Passphase"
              size="large"
            />
            <div className="w-[300px]">
              <Title as="h6" fontWeight="normal">
                Change passphrase
              </Title>
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
            <FormCheckbox
              name="automatic-log-out"
              options={[
                {
                  id: "opt1",
                  label: "Log out automatically after being inactive for",
                  value: "false",
                },
                // Add more options as needed
              ]}
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
            name="time"
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
            <Title as="h6" fontWeight="normal">
              Configure restricted file types
            </Title>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrganizationSecuritylSettings;
