import Image from "next/image";
import Logo from "../../../../public/digiqore.png";

const AuthBanner = () => {
    return (
        <div
        className="basis-full md:basis-2/5 bg-primary w-full relative hidden xl:flex justify-center items-center bg-gradient-to-bl
  from-customGreen via-customBlue to-customBlue"
      >
        <div>
          <Image src={Logo} alt="logo" />
        </div>
      </div>
    );
}

export default AuthBanner;