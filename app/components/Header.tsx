import Link from 'next/link'
import Button from './ui/Button'
import { getCurrentUser } from '@/lib/dal'
import SignOutButton from './ui/SignOutButton'

export default async function Header() {
  const user = await getCurrentUser()

  return (
    <header className="border-b border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link href="/" >
            <img src="/issueflow-logo.svg" alt="IssueFlow logo" width={150} height={150} />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/features"
              className="text-sm font-medium hover:text-purple-600"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-purple-600"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-purple-600"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
              <span className="hidden md:inline text-sm text-slate-700 dark:text-slate-300 truncate">
                <Button >{user.email}</Button>
              </span>
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="outline">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}