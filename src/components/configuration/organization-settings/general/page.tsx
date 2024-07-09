import FormCheckbox from "@/components/forms/form-checkbox";
import FormInput from "@/components/forms/form-input/form-input";
import FormSelect from "@/components/forms/form-select";
import Container from "@/components/ui/container";
import HolidayTable from "@/components/ui/holiday-table";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";
import { useForm } from "react-hook-form";

const OrganizationGeneralSettings = () => {
  const methods = useForm<any>({
    defaultValues: {
      holidays: [{ date: "" }],
    },
  });
  return (
    <Container>
      <SectionTitle title="Online Editing" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Microsoft Office Online
          </Label>
          <div className="w-full">
            <FormCheckbox
              name="microsoft_office_online"
              options={[
                {
                  id: "microsoft_office_online",
                  label: "Enable online editing of Microsoft Office files",
                  value: "false",
                },
                // Add more options as needed
              ]}
              label="Enable online editing of Microsoft Office files"
            />
          </div>
        </div>
      </div>
      <SectionTitle title="Collaboration" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Microsoft Teams Integration
          </Label>
          <div className="w-full">
            <FormCheckbox
              name="microsoft_teams_integration"
              options={[
                {
                  id: "opt1",
                  label:
                    "Enable the sharing functionality with Microsoft Teams",
                  value: "false",
                },
                // Add more options as needed
              ]}
              label="Enable the sharing functionality with Microsoft Teams"
            />
          </div>
        </div>
      </div>
      <SectionTitle title="Diagnostics & feedback" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Organization GUID
          </Label>
          <div className="w-full">
            <FormInput name="passphrase" placeholder="Demo ID" size="small" />
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Customer Experience Improvement Program (CEIP)
          </Label>
          <div className="w-full">
            <FormCheckbox
              name="customer_experience_improvement_program_(CEIP)"
              options={[
                {
                  id: "opt1",
                  label: "Customer Experience Improvement Program (CEIP)",
                  value: "false",
                },
                // Add more options as needed
              ]}
              label="Customer Experience Improvement Program (CEIP)"
            />
          </div>
        </div>
      </div>
      <SectionTitle title="Time & language" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Language
          </Label>

          <FormSelect
            size="small"
            name="language"
            id="language"
            options={[
              { id: "opt1", label: "English", value: "eng" },
              { id: "opt2", label: "Spanish", value: "spa" },
              { id: "opt3", label: "French", value: "fre" },
              { id: "opt4", label: "German", value: "ger" },
              { id: "opt5", label: "Italian", value: "ita" },
              { id: "opt6", label: "Japanese", value: "jpn" },
            ]}
          />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Date/Number format
          </Label>

          <FormSelect
            id="date-or-number-format"
            size="small"
            name="date-or-number-format"
            options={[
              { id: "opt1", label: "English", value: "eng" },
              { id: "opt2", label: "Spanish", value: "spa" },
              { id: "opt3", label: "French", value: "fre" },
              { id: "opt4", label: "German", value: "ger" },
              { id: "opt5", label: "Italian", value: "ita" },
              { id: "opt6", label: "Japanese", value: "jpn" },
            ]}
          />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Time Zone
          </Label>

          <FormSelect
            id="time-zone"
            size="small"
            name="date-or-number-format"
            options={[
              { id: "opt1", label: "English", value: "eng" },
              { id: "opt2", label: "Spanish", value: "spa" },
              { id: "opt3", label: "French", value: "fre" },
              { id: "opt4", label: "German", value: "ger" },
              { id: "opt5", label: "Italian", value: "ita" },
              { id: "opt6", label: "Japanese", value: "jpn" },
            ]}
          />
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row  ">
          <Label
            htmlFor="hrFullName2"
            className="lg:min-w-[260px] lg:text-end lg:mt-3"
          >
            Working days
          </Label>
          <div className="w-full">
            <FormCheckbox
              name="working_days"
              options={[
                { id: "opt1", label: "Saturday", value: "sat" },
                { id: "opt2", label: "Sunday", value: "sun" },
                { id: "opt3", label: "Monday", value: "mon" },
                { id: "opt4", label: "Tuesday", value: "tue" },
                { id: "opt5", label: "Wednesday", value: "wed" },
                { id: "opt6", label: "Thursday", value: "thu" },
                { id: "opt7", label: "Friday", value: "fri" },
              ]}
              label="Working days"
            />
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row  ">
          <Label
            htmlFor="hrFullName2"
            className="lg:min-w-[260px] lg:text-end lg:mt-3"
          >
            Working time
          </Label>
          <div className="flex gap-4">
            <div className="w-40">
              <FormInput
                name="working_time"
                placeholder="Demo Time"
                type="time"
              />
            </div>
            <div className="w-40">
              <FormInput
                name="working_time"
                placeholder="Demo Time"
                type="time"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row  ">
          <Label
            htmlFor="hrFullName2"
            className="lg:min-w-[260px] lg:text-end lg:mt-3"
          >
            Holidays
          </Label>
          <div className="flex gap-4 w-96">
            <HolidayTable name="holidays" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrganizationGeneralSettings;
