export default function TestEnv() {
  return (
    <div className="p-8">
      <h1>Environment Check</h1>
      <p>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL}</p>
      <p>Length of ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0}</p>
    </div>
  )
}