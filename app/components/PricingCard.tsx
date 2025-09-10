import Link from 'next/link'
import { CheckCircle2, XCircle } from 'lucide-react'
import { PricingCardProps } from '@/lib/types'

export default function PricingCard({
    title,
    price,
    period = 'per month',
    description,
    features,
    buttonText,
    buttonLink,
    highlighted = false,
    badge,
  }: PricingCardProps) {
    return (
      <div
    className={`rounded-lg p-6 ${
      highlighted
        ? 'relative bg-gradient-to-b from-violet-950 to-purple-900 border-2 border-violet-700 shadow-md'
        : 'bg-slate-900 border border-slate-700 shadow-sm'
    }`}
  >
    {badge && (
      <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
        {badge}
      </div>
    )}
  
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
  
    <div className="mb-4">
      <span className="text-3xl font-bold text-white">{price}</span>
      {price !== 'Custom' && (
        <span className="text-slate-300"> {period}</span>
      )}
    </div>
  
    <p className="text-slate-300 mb-6">{description}</p>
  
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          {feature.included ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 mr-2 flex-shrink-0" />
          ) : (
            <XCircle className="h-5 w-5 text-slate-500 mr-2 flex-shrink-0" />
          )}
          <span
            className={feature.included ? 'text-white' : 'text-slate-500'}
          >
            {feature.name}
          </span>
        </li>
      ))}
    </ul>
  
    <Link
      href={buttonLink}
      className={`w-full inline-flex h-10 items-center justify-center rounded-md px-8 py-2 text-sm font-medium shadow transition-colors ${
        highlighted
          ? 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-2 focus:ring-purple-400/40'
          : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 focus:ring-2 focus:ring-purple-400/30'
      }`}
    >
      {buttonText}
    </Link>
  </div>
  
    )
  }