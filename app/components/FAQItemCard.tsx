import {useState} from 'react'
import { ChevronDown } from 'lucide-react'
import {FAQ} from "@/lib/types"

export default function FaqItemCard({ item, index }: { item: FAQ; index: number }) {
    const [open, setOpen] = useState(false)
  
    return (
      <div
        className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
        style={{ transitionDelay: `${index * 30}ms` }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between px-4 py-4"
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
        >
          <span className="text-left text-base font-semibold text-slate-900">
            {item.question}
          </span>
          <span
            className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-slate-200 ${
              open ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </button>
  
        <div
          id={`faq-panel-${index}`}
          className={`grid transition-all duration-300 ease-out ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 pb-4 pt-0 text-sm text-slate-600">
              {item.answer}
            </div>
          </div>
        </div>
  
        <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    )
  }