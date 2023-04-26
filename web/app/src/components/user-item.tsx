import { Link } from "react-router-dom"
import { User } from "@prisma/client"

import { formatDate } from "@/lib/utils"
import { UserOperations } from "@/components/user-operations"
import { Skeleton } from "@/components/ui/skeleton"

interface UserItemProps {
  user: User
}

export function UserItem({ user }: UserItemProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-1">
        <Link
          to={`/dashboard/editor/user/${user.id}`}
          className="font-semibold hover:underline"
        >
          {user.name} | {user.email}
        </Link>
        <div>
          <p className="text-sm text-slate-600">
            {user.createdAt.toString()}
          </p>
        </div>
      </div>
      <UserOperations user={{ id: user.id }} />
    </div>
  )
}

UserItem.Skeleton = function UserItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="w-2/5 h-5" />
        <Skeleton className="w-4/5 h-4" />
      </div>
    </div>
  )
}
