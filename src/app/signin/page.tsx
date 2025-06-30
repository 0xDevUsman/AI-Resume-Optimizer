import SignIn from "@/components/custom/Signin";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col px-10 overflow-x-auto">
        <SignIn />
      </div>
    </>
  );
};

export default page;
