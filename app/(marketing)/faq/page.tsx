'use client'

import React from 'react'
import FaqItemCard from '@/app/components/FAQItemCard'
import faqItems from '@/lib/content'

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

