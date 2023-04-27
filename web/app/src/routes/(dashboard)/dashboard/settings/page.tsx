import { redirect } from "react-router-dom"

import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { UserNameForm } from "@/components/user-name-form"
import { getCurrentUser } from "@/lib/auth"
import { useState, useEffect } from "react"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

interface SettingsPageProps {
  user: any
}

export default function SettingsPage({ user }: SettingsPageProps) {

  if (!user) {
    redirect("/login")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />  
      <div className="grid gap-10">
        {user?.id ? (
          <UserNameForm user={{ id: user.id, name: user.name }} />
        ) : null}
      </div>
    </DashboardShell>
  )
}

const withUser = (Component: any) => (props: any) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    async function getUser() {
      const user = await getCurrentUser()
      setUser(user)
    }
    getUser()
  }, [])
  
  return <Component {...props} user={user} />
}

export const SettingsPageWithUser = withUser(SettingsPage);


