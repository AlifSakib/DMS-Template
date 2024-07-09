import FormInput from "@/components/forms/form-input/form-input";
import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";

const DiagonisticsAndFeedback = () => {
  return (
    <>
      <SectionTitle title="Diagnostics & feedback" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Organization GUID
          </Label>
          <div className="w-full">
            <FormInput
              name="general.diagnostics_and_feedback.organization_guid"
              placeholder="Demo ID"
              size="small"
            />
          </div>
        </div>
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Customer Experience Improvement Program (CEIP)
          </Label>
          <div className="w-full">
            <FormSingleCheckbox
              name="general.diagnostics_and_feedback.customer_experience_improvement_program_ceip"
              label="Customer Experience Improvement Program (CEIP)"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagonisticsAndFeedback;
