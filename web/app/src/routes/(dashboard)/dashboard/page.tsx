import { redirect } from "react-router-dom"
import { User } from "@prisma/client"

import { db } from "@/lib/db"
import { cn } from "@/lib/utils"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { DashboardHeader } from "@/components/header"
import { PostCreateButton } from "@/components/post-create-button"
import { PostItem } from "@/components/post-item"
import { DashboardShell } from "@/components/shell"
import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Dashboard",
}

export default function DashboardPage() {
  const user = {
    id: 1,
    name: "John Doe",
    email: "jhon.doe@gmail.com",
  }

  if (!user) {
    redirect("/auth/login")
  }

  const Tasks: any = null;

  return (
    <DashboardShell>
      <DashboardHeader heading="Tasks" text="Create and manage Tasks.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon name="post" />
          <EmptyPlaceholder.Title>No Tasks created</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You don&apos;t have any Tasks yet. Start creating content.
          </EmptyPlaceholder.Description>
          <PostCreateButton
            className={cn(
              buttonVariants({ variant: "outline" }),
              "text-slate-900"
            )}
          />
        </EmptyPlaceholder>
      </div>
    </DashboardShell>
  )
}
