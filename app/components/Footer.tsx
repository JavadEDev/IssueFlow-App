import { Timestamp } from '../components/Timestamp'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <img src="/issueflow-logo.svg" alt="IssueFlow logo" width={120} height={32} className="mb-4" />
          <p className="text-sm text-gray-600">
            Streamline your team's workflow with simple, powerful issue tracking.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/pricing"
                className="text-sm text-gray-600 hover:text-purple-600"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-sm text-gray-600 hover:text-purple-600"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/javadesmati/details/projects/?profileUrn=urn%3Ali%3Afsd_profile%3AACoAACU0MrQBcGcrD-NDJ_egvHpcgQGd6zxZeOw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-purple-600"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JavadEDev/IssueFlow-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-purple-600"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-purple-600"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 text-center">
        <p className="text-sm text-gray-600">
          &copy; <Timestamp /> IssueFlow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer