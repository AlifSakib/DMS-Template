import FormSelect from "@/components/forms/form-select";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";

const ExportEncoding: React.FC = () => {
  return (
    <>
      <SectionTitle title="Export encoding" tag="h6" weight="medium" />
      <div className="col-span-2  flex flex-col gap-2 lg:gap-5 lg:flex-row ">
        <div>
          <Label htmlFor="hrFullName2" className="lg:min-w-[260px] lg:text-end">
            Encoding default
          </Label>
        </div>

        <div>
          <p>{`Set an organization's encoding default for exported CSV lists`}</p>
          <FormSelect
            id="encoding-default"
            size="large"
            name="general.export_encoding.encoding_default"
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
      </div>
    </>
  );
};

export default ExportEncoding;
