import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";
import { showModal } from "@/redux/features/organizational-settings/organizational-slice";
import { useDispatch } from "react-redux";

const Others = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <SectionTitle title="Other" tag="h6" weight="medium" />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Restricted File Types
          </Label>
          <div className="w-full">
            <p
              className="text-blue-600 underline  cursor-pointer"
              onClick={() => {
                dispatch(showModal("configureRestrictedFileTypes"));
              }}
            >
              Configure restricted file types
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;
