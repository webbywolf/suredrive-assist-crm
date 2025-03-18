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
  Users,
  ListCheck,
  SquareCheck,
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
    name: "Employees",
    icon: Users,
    path: "/employees",
    submenu: [
      {
        id: 1,
        name: "Add",
        path: "/employees/onboarding",
      },
      {
        id: 2,
        name: "View All Employees",
        path: "/employees",
      },
    ],
  },

  {
    id: 7,
    name: "Approvals",
    icon: SquareCheck,
    path: "/approvals",
    submenu: [
      {
        id: 1,
        name: "Employee",
        path: "/approvals/users",
      },
      {
        id: 2,
        name: "Payments",
        path: "/approvals/payments",
      },
      {
        id: 3,
        name: "Service Escalation",
        path: "/approvals/services",
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
        name: "Onboarding",
        path: "/partners/onboarding",
      },
      {
        id: 2,
        name: "View All Partners",
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
        name: "Add",
        path: "/services/add",
      },
      {
        name: "View All Services",
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
        name: "Departments",
        path: "/roles-permissions/departments",
      },
      {
        name: "Roles",
        path: "/roles-permissions/roles",
      },
      {
        name: "Permissions",
        path: "/roles-permissions/permissions",
      },
      {
        name: "Assign Roles",
        path: "/roles-permissions/assign-roles",
      },
      {
        name: "Manage Access",
        path: "/roles-permissions/manage-access",
      },
    ],
  },
]
