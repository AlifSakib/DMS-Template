import Label from "@/components/ui/label";
import ReusableModal from "@/components/ui/modal";
import { Button, Input, Title } from "rizzui";

const ChangePassphrase = ({ isModalOpen, closeModal }: any) => {
  return (
    <ReusableModal isOpen={isModalOpen} onClose={closeModal} size="lg">
      <div>
        <div className="p-4 flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-4">
            <Title as="h5" fontWeight="bold">
              Change Passphrase
            </Title>
            <div className="w-[400px]">
              <Input
                name="security.login.single_sign_on"
                label="Enter a new passphrase"
              />
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
  );
};

export default ChangePassphrase;
