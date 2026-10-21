'use client'

import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 使用示例：左边用户说的，右边产品给的。
 * 图片位优先用配置里的真实截图；没有则渲染一个飞书对话示意窗。
 */
function MockWindow({ lines }) {
  return (
    <div className='mx-auto max-w-3xl'>
      <div className='rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl overflow-hidden'>
        <div className='flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/60'>
          <span className='w-2.5 h-2.5 rounded-full bg-red-300' />
          <span className='w-2.5 h-2.5 rounded-full bg-yellow-300' />
          <span className='w-2.5 h-2.5 rounded-full bg-green-300' />
          <span className='ml-2 text-[13px] font-semibold text-gray-600 dark:text-gray-300'>
            成交陪跑教练
          </span>
          <span className='ml-auto text-[11px] text-gray-400'>飞书</span>
        </div>
        <div className='px-4 py-4 space-y-3 bg-gray-50/60 dark:bg-gray-900'>
          {lines.map((l, i) => (
            <div key={i} className={l.me ? 'flex justify-end' : 'flex justify-start'}>
              <div
                className={
                  l.me
                    ? 'max-w-[86%] bg-blue-600 text-white text-[13px] leading-relaxed rounded-2xl rounded-tr-sm px-3.5 py-2.5'
                    : 'max-w-[86%] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-[13px] leading-relaxed rounded-2xl rounded-tl-sm px-3.5 py-2.5'
                }>
                {l.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className='mt-3 text-center text-[11px] text-gray-400'>
        示意图 · 取自真实测试对话（客户姓名与数字已处理）
      </p>
    </div>
  )
}

export default function Examples() {
  const eyebrow = siteConfig('LANDING_EXAMPLES_EYEBROW', '', CONFIG)
  const header = siteConfig('LANDING_EXAMPLES_HEADER', '', CONFIG)
  const sub = siteConfig('LANDING_EXAMPLES_P', '', CONFIG)
  const image = siteConfig('LANDING_EXAMPLES_IMAGE', '', CONFIG)

  const cards = [1, 2, 3, 4]
    .map(i => ({
      q: siteConfig(`LANDING_EXAMPLES_${i}_Q`, '', CONFIG),
      a: siteConfig(`LANDING_EXAMPLES_${i}_A`, '', CONFIG),
      note: siteConfig(`LANDING_EXAMPLES_${i}_NOTE`, '', CONFIG),
      tag: siteConfig(`LANDING_EXAMPLES_${i}_TAG`, '', CONFIG)
    }))
    .filter(c => c.q && c.a)

  const lines = [
    { me: true, text: siteConfig('LANDING_EXAMPLES_MOCK_Q1', '', CONFIG) },
    { me: false, text: siteConfig('LANDING_EXAMPLES_MOCK_A1', '', CONFIG) },
    { me: true, text: siteConfig('LANDING_EXAMPLES_MOCK_Q2', '', CONFIG) },
    { me: false, text: siteConfig('LANDING_EXAMPLES_MOCK_A2', '', CONFIG) }
  ].filter(l => l.text)

  if (!header && cards.length === 0) return null

  return (
    <section className='relative bg-gray-50 dark:bg-gray-950'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20'>
        <div className='text-center mb-10'>
          {eyebrow && (
            <div className='mb-3'>
              <span className='inline-block text-xs font-bold tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-full px-3 py-1'>
                {eyebrow}
              </span>
            </div>
          )}
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100'>
            {header}
          </h2>
          {sub && (
            <p className='mt-3 text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'>
              {sub}
            </p>
          )}
        </div>

        {image ? (
          <img
            src={image}
            alt='成交陪跑教练在飞书中的界面'
            className='mx-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl w-full max-w-3xl'
          />
        ) : (
          lines.length > 0 && <MockWindow lines={lines} />
        )}

        <div className='mt-10 grid gap-5 md:grid-cols-2'>
          {cards.map((c, i) => (
            <div
              key={i}
              className='flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5'>
              <div className='flex justify-end'>
                <div className='max-w-[92%] bg-blue-600 text-white text-[13.5px] leading-relaxed rounded-2xl rounded-tr-sm px-3.5 py-2.5'>
                  {c.q}
                </div>
              </div>
              <div className='mt-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500 px-3.5 py-3'>
                <div className='text-[11px] text-gray-400 mb-1'>它给的</div>
                <div className='text-[13.5px] leading-relaxed text-gray-700 dark:text-gray-200 whitespace-pre-line'>
                  {c.a}
                </div>
              </div>
              <div className='mt-auto pt-3 flex items-center justify-between gap-3'>
                <span className='text-[12px] text-gray-500 dark:text-gray-400'>⚑ {c.note}</span>
                {c.tag && (
                  <span className='shrink-0 text-[11px] font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 rounded-full px-2.5 py-1'>
                    {c.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
