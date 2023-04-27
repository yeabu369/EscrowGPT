"use client"

import { Link, useNavigate } from "react-router-dom"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user-avatar"
import React from "react"
import localforage from "localforage"
import UserContext from "@/context/user.context"

type User = {
    name: string
    image: string
    email: string
}

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "image" | "name" | "email">
}

export function UserAccountNav() {
  const navigate = useNavigate()
  const signOut = ({ callbackUrl }: { callbackUrl: string }) => {
    console.log("sign out")
    localforage.removeItem("user");
    navigate(callbackUrl)
  }
  
  return (
    <UserContext.Consumer>
      {(user: any) => (
          <DropdownMenu>
          <DropdownMenuTrigger>
            <UserAvatar
              user={{ name: user.name || null, image: user.image || null }}
              className="w-8 h-8"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1 leading-none">
                {user.name && <p className="font-medium">{user.name}</p>}
                {user.email && (
                  <p className="w-[200px] truncate text-sm text-slate-600">
                    {user.email}
                  </p>
                )}
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/dashboard/billing">Billing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onSelect={(event: any) => {
                event.preventDefault()
                signOut({
                  callbackUrl: `/auth/login`,
                })
              }}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        )}
    </UserContext.Consumer>
  )
}
