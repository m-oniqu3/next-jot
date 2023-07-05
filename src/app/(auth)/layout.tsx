import Navbar from "@/components/Navbar";
import React, { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
};

export default AuthLayout;
