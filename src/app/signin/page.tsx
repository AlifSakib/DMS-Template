import Image from "next/image";
import SignInForm from "./sign-in-form";
import Logo from "../../../public/digiqore.png";

export default function SignIn() {
  return (
    <div>
      <div className="min-h-screen bg-background flex items-center overflow-hidden w-full">
        <div className="min-h-screen basis-full flex flex-wrap w-full justify-center overflow-y-auto">
          <div
            className="basis-full md:basis-2/5 bg-primary w-full relative hidden xl:flex justify-center items-center bg-gradient-to-br
      from-customBlue via-customBlue to-customGreen"
          >
            <div>
              <Image src={Logo} alt="logo" />
            </div>
          </div>

          <div className="min-h-screen basis-full md:basis-3/5 w-full px-4 py-5 flex justify-center items-center">
            <div className="w-full lg:w-[480px]">
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
