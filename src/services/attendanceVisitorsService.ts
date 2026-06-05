import { supabase } from "@/supabase"

type VisitorPayload = {
  fullName: string
  contact: string
  institution: string
  honorific?: string
  designation?: string
  gender?: string
  city?: string
  province?: string
}

// CREATE LOG FOR VISITORS TYPE
export const createVisitorLog = async (payload: VisitorPayload) => {
  const { data, error } = await supabase
    .from("attendance_logs_visitors")
    .insert([
      {
        full_name: payload.fullName,
        honorific: payload.honorific ?? null,
        designation: payload.designation ?? null,
        gender: payload.gender ?? null,
        contact: payload.contact,
        institution: payload.institution,
        city: payload.city ?? null,
        province: payload.province ?? null,
        time_in: new Date().toISOString(),
      }
    ])
    .select()
    .single()

  if (error) throw error
  return data
}

// UPDATE VISITOR TIME OUT
export const updateVisitorTimeOut = async (logId: string) => {
  const { data, error } = await supabase
    .from("attendance_logs_visitors")
    .update({ time_out: new Date().toISOString() })
    .eq("id", logId)

  if (error) throw error
  return data
}

// GET VISITOR LOGS
export const getVisitorLogs = async () => {
  const { data, error } = await supabase
    .from("attendance_logs_visitors")
    .select("*")
    .order("time_in", { ascending: false })
    .limit(20)

  if (error) throw error
  return data
}