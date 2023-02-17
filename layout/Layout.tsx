import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import React, { FunctionComponent } from "react";
import cn from "classnames";
import styles from "./Layout.module.scss";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components/Up/Up";

const Layout = ({ children }: LayoutProps) => (
  <main className={styles.wrapper}>
    <Header />
    <Sidebar className={styles.sidebar} />
    <div className={styles.body}>{children}</div>
    <Footer className={styles.footer} />
    <Up />
  </main>
);

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
