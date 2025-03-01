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
} from "lucide-react"

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
    path: "/admin",
    submenu: [
      {
        id: 1,
        name: "Add New User",
        path: "/admin/add",
      },
      {
        id: 2,
        name: "All Users",
        path: "/admin/alluser",
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
        name: "add",
        path: "/partner/add",
      },
      {
        id: 2,
        name: "All",
        path: "/student/all",
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
        name: "add",
        path: "/Service/add",
      },
      {
        name: "All",
        path: "/Service/all",
      },
    ],
  },
  {
    id: 5,
    name: "Permissions",
    icon: Settings,
    path: "/permissions",
  },
]
