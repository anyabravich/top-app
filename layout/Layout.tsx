import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
    <Footer />
  </>
);
