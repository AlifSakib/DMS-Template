import Image from "next/image";

import Logo from "../../../../public/digiqore.png";
import ResetPasswordForm from "./reset-form";
import AuthBanner from "@/components/auth/auth-banner/auth-banner";

export default function ResetPassword() {
  return (
    <div>
      <div className="min-h-screen bg-background flex items-center overflow-hidden w-full">
        <div className="min-h-screen basis-full flex flex-wrap w-full justify-center overflow-y-auto">
          <AuthBanner/>

          <div className="min-h-screen basis-full md:basis-3/5 w-full px-4 py-5 flex justify-center items-center">
            <div className="w-full lg:w-[480px]">
              <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
