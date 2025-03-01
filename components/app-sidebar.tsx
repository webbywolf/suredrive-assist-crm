"use client"

import * as React from "react"
import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react"

import { VersionSwitcher } from "./version-switcher"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "./ui/sidebar"
import { SearchForm } from "./search-form"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion"
import Link from "next/link"
import { navList } from "@/constant/nav"
import { usePathname, useRouter } from "next/navigation"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "#",
      items: [
        {
          title: "Routing",
          url: "#",
        },
        {
          title: "Data Fetching",
          url: "#",
          isActive: true,
        },
        {
          title: "Rendering",
          url: "#",
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },

    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = (path: string) => pathname === path

  return (
    <Sidebar {...props}>
      <SidebarHeader className="">
        <SidebarHead />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarMenu>
            {navList.map((nav, index) => (
              <Collapsible key={nav.id} defaultOpen={index === 1} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      isActive={isActive(nav.path)}
                      className={cn("cursor-pointer", {
                        "!bg-brand !text-white": isActive(nav.path),
                      })}
                    >
                      {!nav.submenu ? (
                        <a href={nav.path} className="w-full flex gap-1">
                          <nav.icon size={20} />
                          {nav.name}
                        </a>
                      ) : (
                        <>
                          <nav.icon size={20} />
                          {nav.name}
                          <ChevronRight className="ml-auto group-data-[state=open]/collapsible:hidden" />
                          <ChevronDown className="ml-auto group-data-[state=closed]/collapsible:hidden" />{" "}
                        </>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {nav.submenu?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub className="cursor-pointer">
                        {nav.submenu.map((item) => (
                          <SidebarMenuSubItem key={item.name}>
                            <SidebarMenuSubButton asChild isActive={isActive(item.path)}>
                              <a href={item.path}>{item.name}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarRail /> */}
    </Sidebar>
  )
}

const SidebarHead = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const onCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className={cn(`logo h-16 flex items-center overflow-hidden border-b border-gray-200`, {})}>
      <img
        loading="lazy"
        className={cn(`object-fit scale-75`, {})}
        src="/assets/images/logo.svg"
        alt="logo"
        style={{ transition: "all 0.3s ease" }}
      />
    </div>
  )
}
