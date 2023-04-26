/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom"

import { dashboardConfig } from "@/config/dashboard"
import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/nav"
import { AdminAccountNav } from "@/components/admin-account-nav"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function AdminLayout({
  children,
}: DashboardLayoutProps) {
  const user = {
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=68",
    email: "jhon.doe@gmail.com",
  }
  const navigate = useNavigate()
  const { users } = useLoaderData() as { users: any[] }

  if (!user) {
    navigate("/auth/login")
    return null
  }

  return (
    <div className="mx-auto flex flex-col space-y-6">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={dashboardConfig.adminMainNav} />
          <AdminAccountNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className="container grid gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.adminSidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
