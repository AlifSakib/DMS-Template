import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";

const Collaboration = () => {
  return (
    <>
      <SectionTitle title="Collaboration" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Microsoft Teams Integration
          </Label>
          <div className="w-full">
            <FormSingleCheckbox
              name="general.collaboration.microsoft_teams_integration"
              label="Enable the sharing functionality with Microsoft Teams"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaboration;
