import { createHash } from 'crypto'

export function saltAndHashPassword(password: string) {
  // 使用 SHA-256 加密
  const hash = createHash('sha256')
  // 添加一个固定的salt (建议使用环境变量)
  const salt = process.env.PASSWORD_SALT || 'default-salt-value'
  hash.update(password + salt)
  return hash.digest('hex')
}
