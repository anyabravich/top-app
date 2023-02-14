import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.scss";
import cn from "classnames";

export const Sidebar = ({ ...props }: SidebarProps) => (
  <div {...props}>Sidebar</div>
);
