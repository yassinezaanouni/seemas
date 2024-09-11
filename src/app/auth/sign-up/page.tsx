import React from "react";
import {RightPanel} from "@/app/auth/component/right-panel";
import {LeftPanel} from "../component/left-panel";

const page = () => (
  <section className="container flex h-screen min-h-[1000px] gap-[4.5rem]">
    <LeftPanel
      title="Create account"
      subtitle="Sign up to get started"
      description="Already have an account?"
      link={{
        title: "Sign in",
        href: "/auth/sign-in",
      }}
    />
    <RightPanel />
  </section>
);

export default page;
