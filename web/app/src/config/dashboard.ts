import { Icons } from "@/components/icons"


export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  adminSidebarNav: SidebarNavItem[]
  adminMainNav: MainNavItem[] 
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
    | {
      href: string
      items?: never
    }
    | {
      href?: string
      items: NavLink[]
    }
  )

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type MainNavItem = {
  title: string
  href: string
  disabled?: boolean
}

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Tasks",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
  adminSidebarNav: [
    {
      title: "Users",
      href: "/admin",
      icon: "users",
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: "settings",
    },
  ],
  adminMainNav: [
    {
      title: "Documentation",
      href: "/docs",
    }
  ]
}
