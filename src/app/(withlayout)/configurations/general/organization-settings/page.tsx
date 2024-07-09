// "use client"

// import OrganizationGeneralSettings from "@/components/configuration/organization-settings/general/page";
// import OrganizationSecuritylSettings from "@/components/configuration/organization-settings/security/page";
// import Tabs from "@/components/ui/tabs";

// const OrganizationSettingsPage = () => {
//     type TabItem = {
//         label: string;
//         component: JSX.Element; // Define the type of component
//     };

//     const tabs: TabItem[] = [
//         { label: "General", component: <OrganizationGeneralSettings/>},
//         { label: "Security", component: <OrganizationSecuritylSettings/> },

//     ];
//     return (
//         <div className="flex justify-center items-center w-full">
//             <div>
//             <Tabs tabs={tabs} />
//             </div>
//         </div>
//     );
// }

// export default OrganizationSettingsPage;

"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import OrganizationGeneralSettings from "@/components/configuration/organization-settings/general/page";
import OrganizationSecuritySettings from "@/components/configuration/organization-settings/security/page";
import Tabs from "@/components/ui/tabs"; // Import your reusable Tabs component
import * as yup from "yup";

// Define your validation schema
const schema = yup.object().shape({
  // Add other fields and validations as needed
});

const OrganizationSettingsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      general: {
        online_editing: {
          microsoft_office_online: true,
        },
        collaboration: {
          microsoft_teams_integration: true,
        },
        diagnostics_and_feedback: {
          organization_guid: "",
          customer_experience_improvement_program_ceip: true,
        },
        time_and_language: {
          language: "",
          date_or_number_format: "",
          timezone: "",
          working_days: "",
          working_time: {
            start: "",
            end: "",
          },
          holidays: [],
        },
        export_encoding: {
          encoding_default: "",
        },
      },
      security: {
        login: {
          single_sign_on: "",
          guest_login: false,
          change_user: "",
        },
        passwords: {
          password_policy: true,
          passphrase: "",
        },
        session_timeout: {
          autometic_log_out: true,
          autometic_log_out_time: "",
        },
      },
    },
  });

  const { trigger, watch, setValue } = methods;

  const tabs = [
    { label: "General", component: <OrganizationGeneralSettings /> },
    {
      label: "Security",
      component: (
        <OrganizationSecuritySettings watch={watch} setValue={setValue} />
      ),
    },
  ];

  const handleTabClick = async (index: number) => {
    // const isEmailValid = await trigger("email");
    // if (!isEmailValid) {
    //     console.log("Email is not valid");
    //     return;
    // }
    setSelectedTab(index);
  };

  return (
    <FormProvider {...methods}>
      <form className="w-full h-full flex justify-center mt-10">
        <div className="">
          <Tabs
            tabs={tabs}
            selectedIndex={selectedTab}
            onSelect={handleTabClick}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default OrganizationSettingsPage;
