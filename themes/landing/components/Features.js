/* eslint-disable @next/next/no-img-element */
'use client'

import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 产品能力介绍：分两块
 * 块一 推进客户成交的技能（LANDING_FEATURES_CARD_1~7，末张通栏）
 * 块二 做内容的技能（LANDING_CONTENT_CARD_1~6）
 */
const CARD_CLS =
  'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-5 shadow-sm h-full'
const CARD_TITLE_CLS =
  'font-bold text-base text-gray-900 dark:text-white mb-2 leading-snug'
const CARD_TEXT_CLS =
  'text-sm text-gray-600 dark:text-gray-400 leading-relaxed'

export default function Features() {
  const deal = [
    { t: siteConfig('LANDING_FEATURES_CARD_1_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_1_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_2_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_2_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_3_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_3_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_4_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_4_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_5_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_5_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_6_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_6_P', null, CONFIG) },
    { t: siteConfig('LANDING_FEATURES_CARD_7_TITLE', null, CONFIG), p: siteConfig('LANDING_FEATURES_CARD_7_P', null, CONFIG) }
  ].filter(c => c.t)

  const content = [
    { t: siteConfig('LANDING_CONTENT_CARD_1_TITLE', null, CONFIG), p: siteConfig('LANDING_CONTENT_CARD_1_P', null, CONFIG) },
    { t: siteConfig('LANDING_CONTENT_CARD_2_TITLE', null, CONFIG), p: siteConfig('LANDING_CONTENT_CARD_2_P', null, CONFIG) },
    { t: siteConfig('LANDING_CONTENT_CARD_3_TITLE', null, CONFIG), p: siteConfig('LANDING_CONTENT_CARD_3_P', null, CONFIG) },
    { t: siteConfig('LANDING_CONTENT_CARD_4_TITLE', null, CONFIG), p: siteConfig('LANDING_CONTENT_CARD_4_P', null, CONFIG) },
    { t: siteConfig('LANDING_CONTENT_CARD_5_TITLE', null, CONFIG), p: siteConfig('LANDING_CONTENT_CARD_5_P', null, CONFIG) },
    { t: siteConfig('LANDING_CONTENT_CARD_6_TITLE', null, CONFIG), p: siteConfig('LANDING_CONTENT_CARD_6_P', null, CONFIG) }
  ].filter(c => c.t)

  const dealHeader = siteConfig('LANDING_FEATURES_HEADER_1', null, CONFIG)
  const dealHeaderP = siteConfig('LANDING_FEATURES_HEADER_1_P', null, CONFIG)
  const contentHeader = siteConfig('LANDING_CONTENT_HEADER', null, CONFIG)
  const contentHeaderP = siteConfig('LANDING_CONTENT_HEADER_P', null, CONFIG)
  const footTitle = siteConfig('LANDING_FEATURES_HEADER_2', null, CONFIG)
  const footText = siteConfig('LANDING_FEATURES_HEADER_2_P', null, CONFIG)

  // 每块最后一行不满 3 张时，让最后一张通栏，避免右侧留空
  const isWide = (list, i) => list.length > 3 && i === list.length - 1 && list.length % 3 === 1

  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gray-100 dark:bg-black pointer-events-none' aria-hidden='true'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20'>
        {/* 块一：推进客户成交的技能 */}
        {(dealHeader || dealHeaderP) && (
          <div className='max-w-3xl mx-auto text-center pb-8 md:pb-10'>
            <h2 className='h2 mb-3 dark:text-white'>{dealHeader}</h2>
            <p
              className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: dealHeaderP }}
            ></p>
          </div>
        )}
        {deal.length > 0 && (
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
            {deal.map((c, i) => (
              <div key={i} className={isWide(deal, i) ? CARD_CLS + ' lg:col-span-3' : CARD_CLS}>
                <div className={CARD_TITLE_CLS}>{c.t}</div>
                <div className={CARD_TEXT_CLS}>{c.p}</div>
              </div>
            ))}
          </div>
        )}

        <div className='my-10 md:my-14 border-t border-gray-200 dark:border-gray-800'></div>

        {/* 块二：做内容的技能 */}
        {(contentHeader || contentHeaderP) && (
          <div className='max-w-3xl mx-auto text-center pb-8 md:pb-10'>
            <h2 className='h2 mb-3 dark:text-white'>{contentHeader}</h2>
            <p
              className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'
              dangerouslySetInnerHTML={{ __html: contentHeaderP }}
            ></p>
          </div>
        )}
        {content.length > 0 && (
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
            {content.map((c, i) => (
              <div key={i} className={isWide(content, i) ? CARD_CLS + ' lg:col-span-3' : CARD_CLS}>
                <div className={CARD_TITLE_CLS}>{c.t}</div>
                <div className={CARD_TEXT_CLS}>{c.p}</div>
              </div>
            ))}
          </div>
        )}

        {(footTitle || footText) && (
          <div className='mt-8 text-center bg-white dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg px-6 py-5'>
            <div className='font-bold text-base text-gray-900 dark:text-white mb-1'>{footTitle}</div>
            <p className='text-sm text-gray-600 dark:text-gray-400'>{footText}</p>
          </div>
        )}
      </div>
    </section>
  )
}
