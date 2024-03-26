import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="h-[100dvh] w-full grid place-content-center">
      <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]" />
      <SignIn />
      <Link href="/" className="z-50 text-center underline text-white text-sm">Back to the homepage</Link>
    </div>
  );
};

export default SignInPage;
