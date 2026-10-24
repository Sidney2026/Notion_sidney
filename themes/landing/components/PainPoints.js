import { siteConfig } from '@/lib/config'
import CONFIG from './config'

const GROUPS = [1, 2, 3]

/**
 * 痛点区：三种人各三条，纯文字、无卡片、无图标
 */
const PainPoints = () => {
  const head = siteConfig('LANDING_PAIN_HEAD', null, CONFIG)
  if (!head) return null

  return (
    <section className='bg-white dark:bg-black'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16'>
        <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10 md:mb-14'>
          {head}
        </h2>
        <div className='grid gap-10 md:grid-cols-3 md:gap-12'>
          {GROUPS.map(i => {
            const title = siteConfig('LANDING_PAIN_G' + i + '_T', null, CONFIG)
            const body = siteConfig('LANDING_PAIN_G' + i, '', CONFIG)
            const items = String(body || '')
              .split('\n')
              .map(s => s.trim())
              .filter(Boolean)
            if (!title || !items.length) return null
            return (
              <div key={i}>
                <h3 className='text-sm font-bold tracking-wide text-gray-900 dark:text-gray-100 mb-4'>
                  {title}
                </h3>
                <ul className='space-y-3'>
                  {items.map((t, k) => (
                    <li
                      key={k}
                      className='text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]'>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PainPoints
