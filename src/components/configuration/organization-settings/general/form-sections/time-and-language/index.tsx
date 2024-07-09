import FormCheckbox from "@/components/forms/form-checkbox";
import FormInput from "@/components/forms/form-input/form-input";
import FormSelect from "@/components/forms/form-select";
import HolidayTable from "@/components/ui/holiday-table";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";

const TimeAndLanguage = () => {
  return (
    <>
      <SectionTitle title="Time & language" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Language
          </Label>

          <FormSelect
            size="small"
            name="general.time_and_language.language"
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
            name="general.time_and_language.date_or_number_format"
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
            name="general.time_and_language.timezone"
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
              name="general.time_and_language.working_days"
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
                name="general.time_and_language.working_time.start"
                placeholder="Demo Time"
                type="time"
              />
            </div>
            <div className="w-40">
              <FormInput
                name="general.time_and_language.working_time.end"
                placeholder="Demo Time"
                type="time"
              />
            </div>
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row  mt-4 ">
          <Label
            htmlFor="hrFullName2"
            className="lg:min-w-[260px] lg:text-end lg:mt-3"
          >
            Holidays
          </Label>
          <div className="flex gap-4">
            <HolidayTable name="general.time_and_language.holidays" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeAndLanguage;
