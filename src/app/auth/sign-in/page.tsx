"use client";
import React from "react";
import {RightPanel} from "@/app/auth/component/right-panel";
import {LeftPanel} from "../component/left-panel";

const page = () => (
  <section className="container flex h-screen min-h-[1000px] gap-[4.5rem]">
    <LeftPanel
      title="Welcome back to SeemaS"
      subtitle="Sign in to continue."
      description="No account ?"
      link={{
        title: "Sign up",
        href: "/auth/sign-up",
      }}
    />
    <RightPanel />
  </section>
);

export default page;
