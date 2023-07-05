import Container from "@/components/Container";
import Header from "@/components/Header";
import React, { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </Fragment>
  );
};

export default AuthLayout;
