import FormSingleCheckbox from "@/components/forms/form-single-checkbox";
import QuantityCounter from "@/components/forms/quantity-counter";
import Label from "@/components/ui/label";
import ReusableModal from "@/components/ui/modal";
import { Button, Input, Title } from "rizzui";

const ChangePasswordPolicy = ({ isModalOpen, closeModal }: any) => {
  return (
    <div>
      <ReusableModal isOpen={isModalOpen} onClose={closeModal} size="lg">
        <div>
          <div className="p-4 ">
            <div className="flex flex-col gap-4">
              <Title as="h5" fontWeight="bold">
                Change Password Policy
              </Title>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
                  <Label htmlFor="hrFullName2" className="lg:min-w-[260px]">
                    The minimum password length is
                  </Label>
                  <div className="w-full">
                    <QuantityCounter
                      label="Quantity Counter"
                      min={0}
                      step={1}
                      initialValue={0}
                    />
                  </div>
                  <Label htmlFor="hrFullName2" className="w-full">
                    Characters
                  </Label>
                </div>
                <div className="col-span-3  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
                  <Label htmlFor="hrFullName2" className="lg:min-w-[260px]">
                    The maximum count of failed logins is
                  </Label>
                  <div className="w-full">
                    <QuantityCounter
                      label="Quantity Counter"
                      min={0}
                      step={1}
                      initialValue={0}
                    />
                  </div>
                  <Label htmlFor="hrFullName2" className="w-full">
                    attempts
                  </Label>
                </div>
                <div className="col-span-3  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
                  <Label htmlFor="hrFullName2" className="lg:min-w-[260px]">
                    The account is locked for
                  </Label>
                  <div className="w-full">
                    <QuantityCounter
                      label="Quantity Counter"
                      min={0}
                      step={1}
                      initialValue={0}
                    />
                  </div>
                  <Label htmlFor="hrFullName2" className="w-full">
                    minutes
                  </Label>
                </div>
                <div className="col-span-3  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
                  <Label htmlFor="hrFullName2" className="lg:min-w-[260px] ">
                    The password expires after
                  </Label>
                  <div className="w-full">
                    <QuantityCounter
                      label="Quantity Counter"
                      min={0}
                      step={1}
                      initialValue={0}
                    />
                  </div>
                  <Label htmlFor="hrFullName2" className="w-full">
                    days
                  </Label>
                </div>
                <div className="col-span-3  flex flex-col gap-2 lg:gap-5 lg:flex-row lg:items-center ">
                  <Label htmlFor="hrFullName2" className="lg:min-w-[260px] ">
                    The user is notified to change the password
                  </Label>
                  <div className="w-full">
                    <QuantityCounter
                      label="Quantity Counter"
                      min={0}
                      step={1}
                      initialValue={0}
                    />
                  </div>
                  <Label htmlFor="hrFullName2" className="w-full">
                    days in advance
                  </Label>
                </div>
              </div>
              <div className="w-full">
                <FormSingleCheckbox
                  name=""
                  label="Enable complexity for passwords"
                />
                <div className="ml-20">
                  <FormSingleCheckbox
                    name=""
                    label="Password must contain 1 capital letter"
                  />
                  <FormSingleCheckbox
                    name=""
                    label="Password must contain 1 lower case letter"
                  />
                  <FormSingleCheckbox
                    name=""
                    label="Password must contain 1 number"
                  />
                  <FormSingleCheckbox
                    name=""
                    label="Password must contain 1 special character"
                  />
                </div>
              </div>

              <div className="flex gap-4  justify-end">
                <Button onClick={closeModal} className="btn btn-secondary w-32">
                  Cancle
                </Button>
                <Button className="btn btn-secondary w-32">OK</Button>
              </div>
            </div>
          </div>
        </div>
      </ReusableModal>
    </div>
  );
};

export default ChangePasswordPolicy;
