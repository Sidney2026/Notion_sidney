import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

/**
 * 站点 Logo
 * 原模板是 NotionNext 的「N」字母圆形标志，已改为本站品牌首字母（取自 AUTHOR 配置）。
 * 想换字母/图形，改 Notion 配置里的 AUTHOR 即可。
 */
export default function Logo () {
  const author = siteConfig('AUTHOR', 'S') || 'S'
  const initial = String(author).trim().charAt(0).toUpperCase()

  return (
    <SmartLink href='/' className='block' aria-label={siteConfig('TITLE', 'Home')}>
      <svg className='w-8 h-8' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <radialGradient cx='21.152%' cy='86.063%' fx='21.152%' fy='86.063%' r='79.941%' id='site-logo'>
            <stop stopColor='#4FD1C5' offset='0%' />
            <stop stopColor='#81E6D9' offset='25.871%' />
            <stop stopColor='#338CF5' offset='100%' />
          </radialGradient>
        </defs>
        <rect width='32' height='32' rx='16' fill='url(#site-logo)' fillRule='nonzero' />
        <text
          x='50%' y='50%' textAnchor='middle' dominantBaseline='central'
          fontSize='20' fontFamily="'Century Gothic', sans-serif" fontWeight='700' fill='white'>
          {initial}
        </text>
      </svg>
    </SmartLink>
  )
}
