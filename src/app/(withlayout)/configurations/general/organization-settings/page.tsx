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
    email: yup.string().email("Invalid email").required("Email is required"),
    // Add other fields and validations as needed
});

const OrganizationSettingsPage = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            // Add other default values as needed
        },
    });

    const { trigger } = methods;

    const tabs = [
        { label: "General", component: <OrganizationGeneralSettings /> },
        { label: "Security", component: <OrganizationSecuritySettings /> },
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



