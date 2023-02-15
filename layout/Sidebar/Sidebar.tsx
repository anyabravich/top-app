import { SidebarProps } from "./Sidebar.props";
import { Menu } from "../Menu/Menu";
import { Search } from "../../components/Search/Search";

export const Sidebar = ({ ...props }: SidebarProps) => (
  <div {...props}>
    <Search />
    <Menu />
  </div>
);
