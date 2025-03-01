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

const Sidebar = () => {
  const isCollapsed = false
  return (
    <aside className="w-full h-full flex flex-col border-r border-gray-200 px-2">
      {/* Header */}
      <SidebarHeader />
      {/* Navigation */}
      <SidebarContent />

      {/* Sidebar Footer */}
      <div className="py-3 border-t border-gray-200">
        <button
          className={cn(`w-full px-4 py-3 flex items-center rounded-md`, {
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
      className={cn(`logo h-16 flex items-center overflow-hidden border-b border-gray-200`, {
        // "justify-center": isCollapsed,
        // "justify-between": !isCollapsed,
      })}
    >
      <img
        loading="lazy"
        className={cn(`object-fit scale-75`, {
          // " scale-0 w-0 hidden": isCollapsed,
          // " scale-100 w-auto ": !isCollapsed,
        })}
        src="/assets/images/logo.svg"
        alt="logo"
        style={{ transition: "all 0.3s ease" }}
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
  const isActive = (path: string) => pathname === path

  return (
    <div className="py-3 flex-1 overflow-auto">
      <Accordion
        type="single"
        collapsible
        // defaultValue={expand.toString()}
        // value={isCollapsed ? "0" : expand.toString()}
        className="w-full flex flex-col gap-1"
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
                className={cn(`px-4 py-3 capitalize font-medium cursor-pointer`, {
                  "px-2 py-3 gap-0 justify-center hover:text-gray-600": isCollapsed,
                  "bg-brand text-white hover:bg-brand": isActive(nav.path),
                  "hover:bg-gray-100 data-[state=open]:bg-gray-200 ": !isActive(nav.path),
                  // "bg-brand hover:bg-brand hover:text-white text-white":
                  //   expand === nav.id && isCollapsed,
                })}
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
                    className={cn(`rotate-0 transition duration-200`, {
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
                          `pl-4 fill-gray-500 font-medium py-2 flex items-center gap-2 capitalize rounded-md transition-all`,
                          {
                            " bg-brand text-white fill-white": pathname === sub.path,
                            "hover:bg-gray-100 ": pathname !== sub.path,
                          }
                        )}
                        key={index}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"></path>
                        </svg>
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
