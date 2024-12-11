const adjectives = [
  "智慧的", "好奇的", "友善的", "活力的", "敏捷的",
  "睿智的", "温暖的", "机灵的", "可爱的", "聪明的",
  "专注的", "耐心的", "博学的", "创新的", "灵动的"
]

const nouns = [
  "助手", "伙伴", "精灵", "向导", "专家",
  "顾问", "智友", "小帮手", "达人", "智囊",
  "导师", "小助理", "专员", "智星", "知友"
]

export function generateBotName(): string {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  return `${adjective}${noun}`
} 