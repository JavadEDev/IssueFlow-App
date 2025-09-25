'use client'

import React from 'react'
import {FAQ} from "@/lib/types"
import FaqItemCard from '@/app/components/FAQItemCard'

const faqItems: FAQ[] = [
  {
    question: 'What is IssueFlow?',
    answer:
      'IssueFlow is a lightweight issue tracking app built with Next.js 15. It helps teams create, triage, and track issues with a fast UI and a simple workflow.',
  },
  {
    question: 'Is IssueFlow free to use?',
    answer:
      'Yes. This project is open-source and free to use. You can run it locally, deploy it yourself, or customize it to your needs.',
  },
  {
    question: 'How do I sign up and sign in?',
    answer:
      'Use the Sign Up page to create an account with your email and password. After that, use the Sign In page to access your dashboard and start creating issues.',
  },
  {
    question: 'Can I self-host IssueFlow?',
    answer:
      'Absolutely. Clone the repository, set your environment variables, run the database migrations with Drizzle, and deploy to your preferred platform.',
  },
  {
    question: 'Where is my data stored?',
    answer:
      'Data is stored in a PostgreSQL database via Drizzle ORM. You control your data entirely if you self-host.',
  },
  {
    question: 'Can I export or delete my data?',
    answer:
      'Yes. You can export data directly from your database. Account and issue deletion are supported from within the app and API routes.',
  },
  {
    question: 'Does IssueFlow have real-time updates?',
    answer:
      'The app uses modern React features and caching strategies for a snappy feel. Live updates depend on your deployment setup; you can integrate websockets or polling if needed.',
  },
  {
    question: 'How can I report a bug or request a feature?',
    answer:
      'Open an issue in the repository. Include steps to reproduce or a short description of the desired feature to help us help you faster.',
  },
  {
    question: 'What technology stack does IssueFlow use?',
    answer:
      'Next.js 15 with the App Router, TypeScript, Tailwind CSS v4, Drizzle ORM, PostgreSQL, and modern React 19 features.',
  },
]

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-900">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="mx-auto max-w-2xl space-y-4">
        {faqItems.map((item, i) => (
          <FaqItemCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}

