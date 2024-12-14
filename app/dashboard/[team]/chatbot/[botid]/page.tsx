import { redirect } from 'next/navigation'

interface PageProps {
  params: {
    botid: string
    team: string
  }
}

const ChatbotPage = ({ params: { botid } }: PageProps) => {
  redirect(`${botid}/playground`)

  // 下面的代码不会执行,因为 redirect 会中断执行
  return (
    <div>
      <h1>Chatbot Details</h1>
    </div>
  )
}

export default ChatbotPage
