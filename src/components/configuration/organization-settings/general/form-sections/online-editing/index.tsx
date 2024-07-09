import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";

const OnlineEditing = () => {
  return (
    <>
      <SectionTitle title="Online Editing" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Microsoft Office Online
          </Label>
          <div className="w-full">
            <FormSingleCheckbox
              name="general.online_editing.microsoft_office_online"
              label="Enable online editing of Microsoft Office files"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineEditing;
