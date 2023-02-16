import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import { Search } from "../../components/Search/Search";
import styles from "./Sidebar.module.scss";
import Logo from "../logo.svg";
import cn from "classnames";

export const Sidebar = ({ className, ...props }: SidebarProps) => (
  <div className={cn(className, styles.sidebar)} {...props}>
    <Logo className={styles.logo} />
    <Search />
    <Menu />
  </div>
);
