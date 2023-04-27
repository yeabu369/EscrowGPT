import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { CardSkeleton } from "@/components/ui/card"

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}