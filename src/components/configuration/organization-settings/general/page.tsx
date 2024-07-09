import FormCheckbox from "@/components/forms/form-checkbox";
import FormInput from "@/components/forms/form-input/form-input";
import FormSelect from "@/components/forms/form-select";
import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import Container from "@/components/ui/container";
import HolidayTable from "@/components/ui/holiday-table";
import Label from "@/components/ui/label";
import SectionTitle from "@/components/ui/section-title";
import Collaboration from "./form-sections/collaboration";
import OnlineEditing from "./form-sections/online-editing";
import DiagonisticsAndFeedback from "./form-sections/diagnostics-and-feedback";
import TimeAndLanguage from "./form-sections/time-and-language";
import ExportEncoding from "./form-sections/export-encoding";

const OrganizationGeneralSettings = () => {
  return (
    <Container>
      <OnlineEditing />
      <Collaboration />
      <DiagonisticsAndFeedback />
      <TimeAndLanguage />
      <ExportEncoding />
    </Container>
  );
};

export default OrganizationGeneralSettings;
