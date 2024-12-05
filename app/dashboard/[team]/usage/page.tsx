import React from 'react'

const UsagePage = async ({ params }: { params: Promise<{ team: string }> }) => {
  const team = (await params).team
  return (
    <div>
      <h1>Usage of {team}</h1>
      {/* 这里可以添加更多内容 */}
    </div>
  )
}

export default UsagePage
