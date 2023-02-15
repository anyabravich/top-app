import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ ...props }: SidebarProps) => (
  <div {...props}>
    <Menu />
  </div>
);
