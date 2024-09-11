import Image from "next/image";
import Link from "next/link";
import {AuthFormProps} from "./left-panel";

export const AuthForm = ({title, subtitle, description, link}: AuthFormProps) => (
  <div>
    <h1 className="text-[2rem] font-bold">{title}</h1>
    <p className="mt-2 font-medium text-zinc-600">{subtitle}</p>
    <div className="w-[min(100%,480px)]">
      <GoogleSignUpButton />
      <p className="mt-4 text-center font-medium">
        {description}{" "}
        <Link
          href={link.href}
          className="font-semibold text-primary hover:underline"
        >
          {link.title}
        </Link>
      </p>
    </div>
  </div>
);

const GoogleSignUpButton = () => (
  <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border p-3">
    <Image
      src="/icons/google.svg"
      alt="Google Logo"
      width={24}
      height={24}
    />
    <span className="font-bold">Sign up with Google</span>
  </button>
);
