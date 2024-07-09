import ReusableModal from "@/components/ui/modal";
import { Button } from "rizzui";

const GuestLogin = ({ isModalOpen, closeModal }: any) => {
  return (
    <div>
      <ReusableModal isOpen={isModalOpen} onClose={closeModal} size="lg">
        <div className="p-4 flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-4">Guest Login</h2>
          <p className="mb-4">
            {`Be advised that there are severe security risks involved with
            allowing guests to log in with another user's credentials. Guests
            will have the same access rights as the user selected.`}
          </p>
          <div className="flex gap-4">
            <Button onClick={closeModal} className="btn btn-secondary">
              Close
            </Button>
            <Button className="btn btn-secondary">
              Acknowledge & Continue
            </Button>
          </div>
        </div>
      </ReusableModal>
    </div>
  );
};

export default GuestLogin;
