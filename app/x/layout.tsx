export default function XLayout({
  children
}: // openai,
// qwen
{
  children: React.ReactNode
  openai: React.ReactNode
  qwen: React.ReactNode
}) {
  return (
    <div className="flex min-h-svh gap-4 p-6">
      <div className="flex-1">{children}</div>
      {/* <div className="flex-1">{openai}</div>
      <div className="flex-1">{qwen}</div> */}
    </div>
  )
}
