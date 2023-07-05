import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import React, { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </Fragment>
  );
};

export default AuthLayout;
