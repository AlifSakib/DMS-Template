"use client";

import { selectOption } from "@/redux/features/configuration/configurationSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const ConfigurationPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const configuration_options = [
        {
          id: 1,
          title: "General",
          options: [
            {
              id: 1,
              title: "Organization Settings",
              path: "/configuration/general/organization-settings",
            },
            {
              id: 2,
              title: "Product Overview",
              path: "/configuration/general/product-overview",
            },
            {
              id: 3,
              title: "User Management",
              path: "/configuration/general/user-management",
            },
            {
              id: 4,
              title: "Audit Reports",
              path: "/configuration/general/audit-reports",
            },
            {
              id: 5,
              title: "Mail Services",
              path: "/configuration/general/mail-services",
            },
            {
              id: 6,
              title: "Text and Barcode Recognition",
              path: "/configuration/general/text-and-barcode-recognition",
            },
            {
              id: 7,
              title: "Preconfigured Solutions",
              path: "/configuration/general/preconfigured-solutions",
            },
          ],
        },
        {
          id: 2,
          title: "Capture",
          options: [
            {
              id: 1,
              title: "Document Processing",
              path: "/configuration/capture/document-processing",
            },
            {
              id: 2,
              title: "Forms",
              path: "/configuration/capture/forms",
            },
            {
              id: 3,
              title: "Outlook Email",
              path: "/configuration/capture/outlook-email",
            },
            {
              id: 4,
              title: "General Email",
              path: "/configuration/capture/general-email",
            },
          ],
        },
        {
          id: 3,
          title: "Index",
          options: [
            {
              id: 1,
              title: "Indexing Assistance",
              path: "/configuration/index/indexing-assistance",
            },
            {
              id: 2,
              title: "Intelligent Indexing",
              path: "/configuration/index/intelligent-indexing",
            },
            {
              id: 3,
              title: "Autoindex",
              path: "/configuration/index/autoindex",
            },
          ],
        },
        {
          id: 4,
          title: "Document Storage",
          options: [
            {
              id: 1,
              title: "File Cabinet",
              path: "/configuration/document-storage/file-cabinet",
            },
            {
              id: 2,
              title: "Document Relations",
              path: "/configuration/document-storage/document-relations",
            },
            {
              id: 3,
              title: "Deletion Policy",
              path: "/configuration/document-storage/deletion-policy",
            },
            {
              id: 4,
              title: "Transfer",
              path: "/configuration/document-storage/transfer",
            },
          ],
        },
        {
          id: 5,
          title: "Collaboration",
          options: [
            {
              id: 1,
              title: "Notifications",
              path: "/configuration/collaboration/notifications",
            },
            {
              id: 2,
              title: "Request",
              path: "/configuration/collaboration/request",
            },
            {
              id: 3,
              title: "Stamps",
              path: "/configuration/collaboration/stamps",
            },
          ],
        },
        {
          id: 6,
          title: "Personal",
          options: [
            {
              id: 1,
              title: "Document Tray",
              path: "/configuration/personal/document-tray",
            },
          ],
        },
        {
          id: 7,
          title: "Integration",
          options: [
            {
              id: 1,
              title: "Smart Connect",
              path: "/configuration/integration/smart-connect",
            },
            {
              id: 2,
              title: "Web Services",
              path: "/configuration/integration/web-services",
            },
            {
              id: 3,
              title: "Webhooks",
              path: "/configuration/integration/webhooks",
            },
            {
              id: 4,
              title: "Export Data",
              path: "/configuration/integration/export-data",
            },
            {
              id: 5,
              title: "FTP",
              path: "/configuration/integration/ftp",
            },
          ],
        },
      ];

    const handleOptionClick = (option: any) => {
        dispatch(selectOption(option));
        
        if (option.path) {
            router.push(option.path);
        }
    };

    return (
      <div className="">
      <div className="">
        {configuration_options.map((option) => (
          <div key={option.id} className="flex">
            <div className="min-w-64 flex items-center pl-10">
              <h2 className="text-sm">{option.title}</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {option.options.map((sub_option) => (
                <div
                  onClick={() => handleOptionClick(sub_option)}
                  className="relative w-56 h-32 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                  key={sub_option.id}
                >
                  {/* Icon positioned at the top right corner */}
                  <div className="absolute top-3 right-3">
                    <div className="w-4 h-4 bg-gray-300 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
    
                  {/* Content of the sub-option */}
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12  bg-gradient-to-r from-customBlue to-customGreen"></div>
                    <h6 className="text-sm font-normal">{sub_option.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    );
}

export default ConfigurationPage