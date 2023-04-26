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
          to={`/editor/${user.id}`}
          className="font-semibold hover:underline"
        >
          {user.name}
        </Link>
        <div>
          <p className="text-sm text-slate-600">
            {formatDate(user.createdAt?.toDateString())}
          </p>
        </div>
      </div>
      <UserOperations user={{ id: user.id, name: user.name }} />
      {/* <PostDeleteButton post={{ id: post.id, title: post.title }} /> */}
    </div>
  )
}

UserItem.Skeleton = function UserItemSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}
