"use client"

import * as React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "../hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "../lib/utils"
import { userAuthSchema } from "../lib/validations/auth"
import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import axios from "axios"

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()
  const navigate = useNavigate()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn(data.email.toLowerCase())

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      })
    }

    data.email === "admin@schedulegpt.io" ? navigate("/dashboard/admin") : navigate("/dashboard");
  }

  const signIn = async (
    email: string
  ) => {
    const { data }: any = await axios.post(
      "http://localhost:3001/signup",
      {
        email,
      }
    )

    console.log(data)

    if (data.ok) {
      return data
    } else {
      return { ok: false }
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>
    </div>
  )
}

