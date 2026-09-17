/* eslint-disable @next/next/no-img-element */
'use client'

import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 能力介绍
 * 原模板是「左侧 3 个 tab + 右侧配图」，但配图（/images/feature-*.webp）不存在，
 * 右侧永远是空白（这就是「右边闲置」的原因）。
 * 已改为 8 张能力卡的网格布局，对应产品说明书里的 8 项能力。
 */
export default function Features () {
  // 注意：siteConfig 内部会调用 hook，必须显式展开、不能写在循环里
  const cards = [
    { t: siteConfig('LANDING_FEATURES_CARD_1_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_1_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_2_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_2_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_3_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_3_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_4_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_4_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_5_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_5_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_6_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_6_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_7_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_7_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_8_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_8_P', null, CONFIG) }
  ].filter(c => c.t)

  const header1 = siteConfig('LANDING_FEATURES_HEADER_1', null, CONFIG)
  const header1p = siteConfig('LANDING_FEATURES_HEADER_1_P', null, CONFIG)
  const header2 = siteConfig('LANDING_FEATURES_HEADER_2', null, CONFIG)
  const header2p = siteConfig('LANDING_FEATURES_HEADER_2_P', null, CONFIG)

  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gray-100 dark:bg-black pointer-events-none' aria-hidden='true'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20'>

        {/* 区块标题 */}
        {(header1 || header1p) && (
          <div className='max-w-3xl mx-auto text-center pb-10 md:pb-14'>
            <h2 className='h2 mb-4 dark:text-white'>{header1}</h2>
            <p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed' dangerouslySetInnerHTML={{ __html: header1p }}></p>
          </div>
        )}

        {/* 能力网格 */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {cards.map((c, i) => (
            <div key={i} className='bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-5 shadow-sm'>
              <div className='font-bold text-gray-900 dark:text-white mb-2 leading-snug'>{c.t}</div>
              <div className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>{c.p}</div>
            </div>
          ))}
        </div>

        {/* 通用能力补充条 */}
        {(header2 || header2p) && (
          <div className='mt-8 text-center bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg px-6 py-5'>
            <div className='font-bold text-lg text-gray-900 dark:text-white mb-1'>{header2}</div>
            <p className='text-gray-600 dark:text-gray-400'>{header2p}</p>
          </div>
        )}

      </div>
    </section>
  )
}
