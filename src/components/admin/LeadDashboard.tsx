'use client'

import { useState } from 'react'
import { updateLeadStatus, updateLeadNotes } from '@/app/admin/actions'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

type Lead = {
  id: string
  name: string
  email: string
  lead_type: string
  details: string | null
  status: string
  notes: string | null
  created_at: string
}

export default function LeadDashboard({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [filterType, setFilterType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  
  const filteredLeads = leads.filter(lead => {
    const matchesType = filterType === 'all' || lead.lead_type === filterType
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = lead.name.toLowerCase().includes(searchLower) || lead.email.toLowerCase().includes(searchLower)
    return matchesType && matchesSearch
  })

  const handleStatusChange = async (id: string, newStatus: string) => {
    // Optimistic update
    setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l))
    await updateLeadStatus(id, newStatus)
  }

  const handleNotesSave = async (id: string, newNotes: string) => {
    // Optimistic update
    setLeads(leads.map(l => l.id === id ? { ...l, notes: newNotes } : l))
    await updateLeadNotes(id, newNotes)
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex-1">
          <Input 
            placeholder="Search name or email..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="sm:w-48">
          <select 
            className="w-full h-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Lead Types</option>
            <option value="hero-consultation">Top Consult</option>
            <option value="bottom-cta-consultation">Bottom Consult</option>
            <option value="ebook-download">E-Book Download</option>
          </select>
        </div>
      </div>

      {/* Leads List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {filteredLeads.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No leads found matching your filters.</div>
        ) : (
          <ul className="divide-y divide-slate-200">
            {filteredLeads.map(lead => {
              const isExpanded = expandedId === lead.id
              const date = new Date(lead.created_at).toLocaleDateString()
              
              let typeBadge = "bg-slate-100 text-slate-700"
              if (lead.lead_type.includes('consultation')) typeBadge = "bg-sky-100 text-sky-700"
              if (lead.lead_type === 'ebook-download') typeBadge = "bg-emerald-100 text-emerald-700"
              
              return (
                <li key={lead.id} className={`transition-colors ${isExpanded ? 'bg-slate-50' : 'hover:bg-slate-50'}`}>
                  {/* Compact View */}
                  <div 
                    className="p-4 sm:px-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    onClick={() => setExpandedId(isExpanded ? null : lead.id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold text-slate-900">{lead.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${typeBadge}`}>
                          {lead.lead_type.replace(/-/g, ' ')}
                        </span>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center gap-4">
                        <span>{lead.email}</span>
                        <span>•</span>
                        <span>{date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-medium ${
                        lead.status === 'new' ? 'text-amber-600' : 
                        lead.status === 'contacted' ? 'text-sky-600' : 'text-slate-500'
                      }`}>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                      <svg className={`w-5 h-5 text-slate-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded Detail View */}
                  {isExpanded && (
                    <div className="p-4 sm:px-6 border-t border-slate-100 bg-white">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Col: Submission Details */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Submission Details</h4>
                          {lead.details ? (
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 border border-slate-200">
                              <p className="font-medium text-slate-900 mb-1">Challenges specified:</p>
                              <p className="whitespace-pre-wrap">{lead.details}</p>
                            </div>
                          ) : (
                            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-500 italic border border-slate-200">
                              No additional details provided.
                            </div>
                          )}
                          
                          <div className="mt-6">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Update Status</h4>
                            <select 
                              className="w-full sm:w-auto rounded-md border border-slate-300 px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                              value={lead.status || 'new'}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="consult-scheduled">Consult Scheduled</option>
                              <option value="archived">Archived</option>
                            </select>
                          </div>
                        </div>

                        {/* Right Col: Internal Notes */}
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Internal Notes</h4>
                          <form 
                            onSubmit={(e) => {
                              e.preventDefault()
                              const form = e.target as HTMLFormElement
                              const notes = (form.elements.namedItem('notes') as HTMLTextAreaElement).value
                              handleNotesSave(lead.id, notes)
                              // show a quick success toast or just rely on state
                              const btn = form.querySelector('button')
                              if (btn) {
                                const oldText = btn.innerText;
                                btn.innerText = "Saved!"
                                setTimeout(() => btn.innerText = oldText, 2000)
                              }
                            }}
                          >
                            <textarea
                              name="notes"
                              defaultValue={lead.notes || ''}
                              placeholder="Add private notes about this lead..."
                              className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 min-h-[120px] mb-3"
                            />
                            <Button type="submit" variant="outline" className="w-full sm:w-auto text-sm">
                              Save Notes
                            </Button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
