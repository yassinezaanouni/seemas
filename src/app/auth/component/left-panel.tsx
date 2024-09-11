import Link from "next/link";
import React from "react";
import {AuthForm} from "./auth-form";
import {Logo} from "@/components/ui/logo";

export type AuthFormProps = {
  title: string;
  subtitle: string;
  description: string;
  link: {
    title: string;
    href: string;
  };
};
export const LeftPanel = (props: AuthFormProps) => {
  return (
    <div className="flex h-full flex-[0.4] flex-col justify-between gap-6">
      <Logo />
      <AuthForm {...props} />
      <Footer />
    </div>
  );
};

const Footer = () => (
  <div className="text-sm font-semibold">
    <Link
      href="#"
      className="pr-3 font-semibold hover:underline"
    >
      Privacy policy
    </Link>
    <Link
      href="#"
      className="border-l pl-3 font-semibold hover:underline"
    >
      Terms & Conditions
    </Link>
  </div>
);
