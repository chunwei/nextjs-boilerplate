import fs from 'fs'
import path from 'path'
import * as cheerio from 'cheerio'

const SVG_DIR = path.join(process.cwd(), 'public', 'model-makers')
const OUTPUT_DIR = path.join(
  process.cwd(),
  'components',
  'icons',
  'model-makers'
)

// 驼峰化属性名称
const toCamelCase = (str) =>
  str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())

// 需要保留的属性
const ALLOWED_ATTRS_ROOT = ['viewBox', 'xmlns']
// 需要保留的属性
const ALLOWED_ATTRS = [
  'width',
  'height',
  'viewBox',
  'xmlns',
  'fill',
  'stroke',
  'opacity',
  'x',
  'y',
  'cx',
  'cy',
  'r',
  'd',
  'points',
  'offset',
  'id'
]

/**
 * 将 SVG 字符串转换为 React 组件
 * @param svgString SVG 的原始字符串
 * @returns React 组件字符串
 */
export function svgToReact(name, svgString) {
  // 加载 SVG 字符串
  const $ = cheerio.load(svgString, { xmlMode: true })
  const $svg = $('svg')

  // 处理 SVG 根元素属性
  const svgAttrs = {}
  if ($svg[0].attribs) {
    Object.entries($svg[0].attribs).forEach(([key, value]) => {
      // 转换属性名称为驼峰
      const reactKey = toCamelCase(key)

      // 只保留允许的属性
      if (
        ALLOWED_ATTRS_ROOT.includes(key) ||
        key.startsWith('stroke-') ||
        key.startsWith('fill-') ||
        key === 'clip-path' ||
        key === 'clip-rule'
      ) {
        svgAttrs[reactKey] = value
      }
    })
  }

  // 转换内部元素
  function transformElement(elem) {
    const $elem = $(elem)
    const tagName = elem.name
    const attrs = {}

    // 处理元素属性
    if ($elem[0].attribs) {
      Object.entries($elem[0].attribs).forEach(([key, value]) => {
        // 转换属性名称为驼峰
        const reactKey = toCamelCase(key)

        // 只保留允许的属性
        if (ALLOWED_ATTRS.includes(key) || key.includes('-')) {
          attrs[reactKey] = value
        }
      })
    }

    // 处理子元素
    const children = $elem
      .children()
      .map((i, child) => transformElement(child))
      .get()
      .join('')

    // 构建属性字符串
    const attrsString = Object.entries(attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')

    // 返回 React 元素字符串
    return children
      ? `<${tagName} ${attrsString}>${children}</${tagName}>`
      : `<${tagName} ${attrsString} />`
  }

  // 转换所有 SVG 内部元素
  const innerElements = $svg
    .children()
    .map((i, elem) => transformElement(elem))
    .get()
    .join('\n')

  // 构建最终的 React 组件
  const componentName = name.charAt(0).toUpperCase() + name.slice(1)
  return `
import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

export const ${componentName}Icon: React.FC<IconProps> = ({size = 16, ...props}) => (
  <svg 
    ${Object.entries(svgAttrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ')}
    width={size}
    height={size}
    style={{ width: size, height: size }}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    ${innerElements}
  </svg>
);
`.trim()
}

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// 读取所有 SVG 文件并转换
const svgFiles = fs.readdirSync(SVG_DIR).filter((file) => file.endsWith('.svg'))

svgFiles.forEach((file) => {
  const content = fs.readFileSync(path.join(SVG_DIR, file), 'utf-8')
  const name = path
    .basename(file, '.svg')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${name}.tsx`),
    svgToReact(name, content)
  )
})

// 生成索引文件
const indexContent = svgFiles
  .map((file) => {
    const name = path
      .basename(file, '.svg')
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')
    return `import { ${name}Icon } from './${name}'`
  })
  .join('\n')

const makerIconsExport = `
export const MAKER_ICONS = {
${svgFiles
  .map((file) => {
    const name = path.basename(file, '.svg')
    const componentName = name
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')
    return `  '${name}': ${componentName}Icon`
  })
  .join(',\n')}
}
`

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'index.ts'),
  indexContent + '\n' + makerIconsExport + '\n'
)

console.log('SVG conversion completed successfully!')
