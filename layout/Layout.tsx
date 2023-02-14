import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import React, { FunctionComponent } from "react";
import cn from "classnames";
import styles from "./Layout.module.scss";

const Layout = ({ children }: LayoutProps) => (
  <main className={styles.wrapper}>
    <Header className={styles.header} />
    <Sidebar className={styles.sidebar} />
    <div className={styles.body}>{children}</div>
    <Footer className={styles.footer} />
  </main>
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
