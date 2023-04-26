import { Link } from "react-router-dom"

import { EmptyPlaceholder } from "@/components/empty-placeholder"

export default function NotFound() {
  return (
    <EmptyPlaceholder className="mx-auto max-w-[800px]">
      <EmptyPlaceholder.Icon name="warning" />
      <EmptyPlaceholder.Title>Uh oh! Not Found</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        This route couldn't not be found. Please try again.
      </EmptyPlaceholder.Description>
      <Link
        to="/"
        className="relative inline-flex items-center px-4 py-2 text-sm font-medium bg-white border rounded-md text-brand-900 h-9 border-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
      >
        Go to Home
      </Link>
    </EmptyPlaceholder>
  )
}