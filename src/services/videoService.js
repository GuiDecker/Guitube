import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://mzxogsfhkkdxqjoklzsz.supabase.co"
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16eG9nc2Zoa2tkeHFqb2tsenN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5MjM5MTgsImV4cCI6MTk4NTQ5OTkxOH0.UjSHWLKDvEZT10GjYvTMLXAx2fHfi1-cavByeBSntXc"
const supabase = createClient(PROJECT_URL, PROJECT_KEY)

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*")
    },
  }
}
