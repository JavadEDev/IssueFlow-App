import Link from 'next/link'
import { ArrowLeftIcon, HomeIcon } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src="/issueflow-icon.svg"
            alt="IssueFlow"
            className="h-16 w-16 opacity-80"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800 h-10 px-4 py-2 text-sm rounded-md"
          >
            <HomeIcon size={16} />
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-dark-border-medium dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:text-gray-100 h-10 px-4 py-2 text-sm rounded-md"
          >
            <ArrowLeftIcon size={16} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}