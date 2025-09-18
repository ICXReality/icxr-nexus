import { SidebarPage } from "@/features/dashboard/sidebar/types";
import { FaCalendar, FaHome } from "react-icons/fa";
import { FaUserGroup, FaNewspaper } from "react-icons/fa6";

export const SIDEBAR_PAGES: SidebarPage[] = [
  {
    title: "Home",
    icon: FaHome,
    link: "/",
  },
  {
    title: "News",
    icon: FaNewspaper,
    link: "/news",
  },
  {
    title: "Events",
    icon: FaCalendar,
    link: "/events",
  },
  {
    title: "Clubs",
    icon: FaUserGroup,
    link: "/clubs",
  },
];
