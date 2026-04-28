import { createClient } from '@/utils/supabase/server'
import LeadDashboard from '@/components/admin/LeadDashboard'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Fetch all leads, newest first
  const { data: leads, error } = await supabase
    .from('bob_wiley_leads')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-md">
        Error loading leads: {error.message}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 font-serif">Lead Inbox</h1>
        <p className="text-slate-600 mt-1">Manage your consultations and e-book downloads.</p>
      </div>
      
      <LeadDashboard initialLeads={leads || []} />
    </div>
  )
}
