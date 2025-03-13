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
  Building2,
  User2,
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
    path: "/users",
    submenu: [
      {
        id: 1,
        name: "Add New User",
        path: "/users/add-new",
      },
      {
        id: 2,
        name: "View Existing Users",
        path: "/users",
      },
    ],
  },

  {
    id: 7,
    name: "Pending Approvals",
    icon: ShieldCheck,
    path: "/pending",
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
    path: "/partners",
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
    name: "Roles & Permissions",
    icon: Settings,
    path: "/roles-permissions",
    submenu: [
      {
        name: "Roles",
        path: "/roles-permissions/roles",
      },
      {
        name: "Permissions",
        path: "/roles-permissions/permissions",
      },
    ],
  },
  {
    id: 6,
    name: "Departments",
    icon: Building2,
    path: "/departments",
  },
];
