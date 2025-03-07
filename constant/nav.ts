import {
  Armchair,
  ArrowRightToLine,
  ChevronRight,
  Cpu,
  DoorOpen,
  LayoutDashboard,
  LogOut,
  LucideIcon,
  MonitorDot,
  ActivitySquare,
  ShieldCheck,
  SquareAsterisk,
  UserRound,
  IndianRupee,
  Landmark,
  LampDesk,
  BookUser,
  LibraryBig,
  Barcode,
  Briefcase,
  BookOpenCheck,
  Handshake,
  IdCard,
  NotebookTabs,
  Settings,
} from "lucide-react";

export const navList = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "User & Permission",
    icon: ShieldCheck,
    path: "/admin/alluser",
    // submenu: [
    //   {
    //     id: 1,
    //     name: "Add New User",
    //     path: "/admin/add",
    //   },
    //   {
    //     id: 2,
    //     name: "View Existing Users",
    //     path: "/admin/alluser",
    //   },
    // ],
  },

  {
    id: 7,
    name: "Pending Approvals",
    icon: ShieldCheck,
    path: "/admin",
    submenu: [
      {
        id: 1,
        name: "User",
        path: "/pending/users",
      },
      {
        id: 2,
        name: "Payments",
        path: "/pending/payments",
      },
      {
        id: 3,
        name: "Service Escalation",
        path: "/pending/services",
      },
    ],
  },
  {
    id: 3,
    name: "Partners",
    icon: Handshake,
    path: "/student",
    submenu: [
      {
        id: 1,
        name: "Add New Partner",
        path: "/partners/add",
      },
      {
        id: 2,
        name: "View Existing",
        path: "/partners/all",
      },
    ],
  },
  {
    id: 4,
    name: "Services",
    icon: NotebookTabs,
    path: "/book",
    submenu: [
      {
        name: "Add New Service",
        path: "/services/add",
      },
      {
        name: "All",
        path: "/services/all",
      },
    ],
  },
  {
    id: 5,
    name: "Permissions",
    icon: Settings,
    path: "/permissions",
  },
];
