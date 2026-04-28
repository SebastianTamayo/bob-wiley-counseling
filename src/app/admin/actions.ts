'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateLeadStatus(id: string, status: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('bob_wiley_leads')
    .update({ status })
    .eq('id', id)
    
  if (error) {
    console.error("Error updating status:", error)
    return { success: false }
  }
  
  revalidatePath('/admin')
  return { success: true }
}

export async function updateLeadNotes(id: string, notes: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('bob_wiley_leads')
    .update({ notes })
    .eq('id', id)
    
  if (error) {
    console.error("Error updating notes:", error)
    return { success: false }
  }
  
  revalidatePath('/admin')
  return { success: true }
}
