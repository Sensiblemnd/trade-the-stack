"use client"

import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { ComponentProps } from "react"
import { NavMain } from "./nav-main"

const data = {
  navMain: [
    {
      title: "Javascript",
      url: "/dashboard/javascript",
      icon: IconDashboard,
    },
    {
      title: "Library",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Front-end Frameworks",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Meta-Frameworks",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Testing",
      url: "#",
      icon: IconUsers,
    },
    {
      title: "Monorepo Tools",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Build Tools",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Mobile & Desktop",
      url: "#",
      icon: IconDashboard,
    },
  ],
}

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Trade The Stack</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>footer </SidebarFooter>
    </Sidebar>
  )
}
