import { useNavigate } from "react-router-dom"

import { dashboardConfig } from "@/config/dashboard"
import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/nav"
import { UserAccountNav } from "@/components/user-account-nav"
import UserContext from "@/context/user.context"
import { getCurrentUser } from "@/lib/auth"
import { User } from "@prisma/client"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = getCurrentUser() as any
  const navigate = useNavigate()

  if (!user) {
    navigate("/auth/login")
    return null
  }

  return (
    <UserContext.Provider value={user}>
      <div className="flex flex-col mx-auto space-y-6">
        <header className="container sticky top-0 z-40 bg-white">
          <div className="flex items-center justify-between h-16 py-4 border-b border-b-slate-200">
            <MainNav items={dashboardConfig.mainNav} />
            <UserAccountNav
              user={{
                name: user.name || null,
                image: user.image || null,
                email: user.email || null,
              }}
            />
          </div>
        </header>
        <div className="container grid gap-12 md:grid-cols-[200px_1fr]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </aside>
          <main className="flex flex-col flex-1 w-full overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </UserContext.Provider>
  )
}
