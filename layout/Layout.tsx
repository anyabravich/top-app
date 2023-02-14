import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import React, { FunctionComponent } from "react";

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
    <Footer />
  </>
);

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
