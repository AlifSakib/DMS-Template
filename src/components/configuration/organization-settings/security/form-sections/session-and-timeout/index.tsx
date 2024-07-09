import FormSelect from "@/components/forms/form-select";
import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";

const SessionAndTimeout = () => {
  return (
    <>
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
    </>
  );
};

export default SessionAndTimeout;
