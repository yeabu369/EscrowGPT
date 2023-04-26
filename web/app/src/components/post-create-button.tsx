/* eslint-disable @typescript-eslint/no-empty-interface */
"use client"

import * as React from "react"

import { toast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"

interface PostCreateButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export function PostCreateButton({
  className,
  ...props
}: PostCreateButtonProps) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    setIsLoading(true)

    const response = await fetch("/api/Tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Post",
      }),
    })

    setIsLoading(false)

    if (!response?.ok) {
      if (response.status === 402) {
        return toast({
          title: "Limit of 3 Tasks reached.",
          description: "Please upgrade to the PRO plan.",
          variant: "destructive",
        })
      }

      return toast({
        title: "Something went wrong.",
        description: "Your post was not created. Please try again.",
        variant: "destructive",
      })
    }

    const post = await response.json()

    // This forces a cache invalidation.
    // Refresh here later
    navigate(`/editor/${post.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants(),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.add className="mr-2 h-4 w-4" />
      )}
      New task
    </button>
  )
}
