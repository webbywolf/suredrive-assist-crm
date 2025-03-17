"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  ArrowRightToLine,
  ChevronRight,
  ActivitySquare,
  LogOut,
  Fan,
  Settings,
  Dot,
  CircleDot,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { navList } from "@/constant/nav"
import Image from "next/image"

const Sidebar = () => {
  const isCollapsed = false
  return (
    <aside className="w-full h-full flex flex-col border-r border-gray-200">
      {/* Header */}
      <SidebarHeader />
      {/* Navigation */}
      <SidebarContent />

      {/* Sidebar Footer */}
      <div className="p-3 border-t border-gray-200">
        <button
          className={cn(`w-full px-4 py-3 flex items-center rounded-md cursor-pointer`, {
            "justify-center hover:bg-gray-200": isCollapsed,
            "hover:bg-gray-100": !isCollapsed,
          })}
          // onClick={handleLogout}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>
  )
}

const SidebarHeader = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const onCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div
      className={cn(`logo h-14 flex overflow-hidden border-b border-gray-200 px-3`, {
        // "justify-center": isCollapsed,
        // "justify-between": !isCollapsed,
      })}
    >
      <Image
        loading="lazy"
        className={cn(`object-fit`, {
          // " scale-0 w-0 hidden": isCollapsed,
          // " scale-100 w-auto ": !isCollapsed,
        })}
        src="/assets/images/logo.svg"
        alt="logo"
        style={{ transition: "all 0.3s ease" }}
        width={160}
        height={100}
      />
      {/* <div>
        <h1 className="font-bold text-lg">SureDrive CRM</h1>
      </div> */}

      {/* <button
        aria-label="collapse"
        className={cn(`text-center rounded-md bg-gray-200`, {
          "rotate-0 px-4 py-4 bg-gray-800 hover:bg-gray-800": isCollapsed,
          "rotate-180 py-2 bg-transparent px-0": !isCollapsed,
        })}
        style={{ transition: "transform 0.3s ease-in-out" }}
        onClick={onCollapse}
      >
        <ArrowRightToLine size={23} />
      </button> */}
    </div>
  )
}

const SidebarContent = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const onCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }
  const expand = false
  const isActive = (path: string) => pathname.includes(path)

  return (
    <div className="p-3 flex-1 overflow-auto">
      <Accordion
        type="single"
        collapsible
        // defaultValue={expand.toString()}
        // value={isCollapsed ? "0" : expand.toString()}
        className="w-full flex flex-col gap-2"
      >
        {navList.map((nav, index) => {
          return (
            <AccordionItem
              value={nav.id.toString()}
              className={cn(`border-none transform-none`)}
              key={index}
              // onClick={() => handleItemClick(nav)}
            >
              <AccordionTrigger
                className={cn(
                  `px-2 py-2 group capitalize text-sm font-normal cursor-pointer rounded-sm`,
                  {
                    "gap-0 justify-center": isCollapsed,
                    "bg-gray-900  text-white hover:bg-gray-900 hover:text-white &>svg:text-red-500":
                      isActive(nav.path),
                    "data-[state=open]:bg-gray-200 data-[state=open]:text-gray-800 hover:bg-gray-100 hover:text-gray-800":
                      !isActive(nav.path),
                    // "bg-brand hover:bg-brand hover:text-white text-white":
                    //   expand === nav.id && isCollapsed,
                  }
                )}
                onClick={() => {
                  if (nav.submenu) return
                  router.push(nav.path)
                }}
              >
                <div
                  className={cn(`transition-transform duration-500`, {
                    "scale-125": isCollapsed,
                    "scale-100": !isCollapsed,
                  })}
                >
                  <nav.icon size={20} />
                </div>
                <span
                  className={cn(`flex-1 inline-block`, {
                    " scale-0 w-0 hidden": isCollapsed,
                    " scale-100 w-auto ": !isCollapsed,
                  })}
                >
                  {nav.name}
                </span>
                {nav.submenu && (
                  <ChevronRight
                    size={16}
                    className={cn(`rotate-0 transition duration-200 data-[state=open]:rotate-60`, {
                      "hidden invisible": isCollapsed,
                      "inline-block": !isCollapsed,
                      // "rotate-90": expand === nav.id,
                    })}
                  />
                )}
              </AccordionTrigger>
              {nav.submenu && (
                <AccordionContent
                  className={cn(`flex flex-col py-0 mt-1 mb-0`, {
                    "data-[state=closed]:animate-accordion-up:": isCollapsed,
                  })}
                >
                  {nav.submenu.map((sub, index) => {
                    return (
                      <Link
                        href={sub.path}
                        className={cn(
                          `pl-4 fill-gray-500 py-2 text-[13px] flex items-center gap-2 capitalize rounded-sm transition-all`,
                          {
                            "bg-gray-300 [&>svg]:text-red-500 [&>span]:border-red-500":
                              pathname === sub.path,
                            "hover:bg-gray-100 ": pathname !== sub.path,
                          }
                        )}
                        key={index}
                      >
                        <span className="size-[7px] border-[1.8px] border-gray-500 rounded-full"></span>
                        {sub.name}
                      </Link>
                    )
                  })}
                </AccordionContent>
              )}
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default Sidebar
