'use client'

import { Fragment } from 'react'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 套餐对比表
 * 参考飞书服务页的做法：上方三档卡片讲"卖点"，下方完整对比表讲"差别"。
 * 数据来自 Notion 配置项 LANDING_PRICING_TABLE（JSON），改内容不需要改代码。
 *
 * 结构：
 * {
 *   "tiers": ["标准版", "专业版 · 最推荐", "尊享版"],
 *   "groups": [
 *     { "group": "基座 · 每月", "slogan": "额度管够，数据独享",
 *       "rows": [ { "k": "AI 模型额度", "v": ["…", "…", "…"] } ] }
 *   ]
 * }
 */
export default function PricingTable () {
  const raw = siteConfig('LANDING_PRICING_TABLE', null, CONFIG)
  let data = null
  try {
    data = typeof raw === 'string' ? JSON.parse(raw) : raw
  } catch (e) {
    data = null
  }
  if (!data || !Array.isArray(data.groups) || !data.groups.length) return null

  const tiers = data.tiers || ['标准版', '专业版', '尊享版']
  const prices = [
    siteConfig('LANDING_PRICING_1_PRICE', '', CONFIG),
    siteConfig('LANDING_PRICING_2_PRICE', '', CONFIG),
    siteConfig('LANDING_PRICING_3_PRICE', '', CONFIG)
  ]

  const Cell = ({ value, highlight }) => {
    if (value === '—' || value === '-' || !value) {
      return <span className='text-gray-300'>—</span>
    }
    // 以 ✓ 开头：绿色对勾 + 后面跟说明文字
    if (typeof value === 'string' && value.startsWith('✓')) {
      const rest = value.slice(1).trim()
      return (
        <span className={highlight ? 'font-semibold text-blue-700 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}>
          <span className='font-bold text-green-600'>✓</span>
          {rest ? <span className='ml-1'>{rest}</span> : null}
        </span>
      )
    }
    return <span className={highlight ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}>{value}</span>
  }

  return (
    <div className='w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16'>
      <div className='overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm'>
        <table className='w-full min-w-[720px] border-collapse bg-white dark:bg-gray-900 text-sm'>
          <thead>
            <tr>
              <th className='text-left px-5 py-4 text-gray-500 font-medium w-[28%] border-b border-gray-200 dark:border-gray-800'>对比项</th>
              {tiers.map((t, i) => (
                <th
                  key={i}
                  className={`px-4 py-4 text-center border-b border-gray-200 dark:border-gray-800 ${i === 1 ? 'bg-blue-50 dark:bg-gray-800' : ''}`}>
                  <div className='font-bold text-gray-900 dark:text-white'>{t}</div>
                  {prices[i] && <div className='text-xs text-gray-500 mt-1 font-normal'>{prices[i]}</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.groups.map((g, gi) => (
              <Fragment key={`g${gi}`}>
                <tr className='bg-gray-50 dark:bg-gray-950'>
                  <td colSpan={4} className='px-5 py-3 border-b border-gray-200 dark:border-gray-800'>
                    <span className='font-bold text-gray-900 dark:text-white'>{g.group}</span>
                    {g.slogan && <span className='ml-3 text-blue-600 font-semibold'>{g.slogan}</span>}
                  </td>
                </tr>
                {(g.rows || []).map((r, ri) => (
                  <tr key={`r${gi}-${ri}`} className='hover:bg-gray-50 dark:hover:bg-gray-950'>
                    <td className='px-5 py-3 text-gray-500 border-b border-gray-100 dark:border-gray-800'>{r.k}</td>
                    {[0, 1, 2].map(ci => (
                      <td
                        key={ci}
                        className={`px-4 py-3 text-center border-b border-gray-100 dark:border-gray-800 align-middle ${ci === 1 ? 'bg-blue-50/50 dark:bg-gray-800/50' : ''}`}>
                        <Cell value={(r.v || [])[ci]} highlight={ci === 1} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className='text-center text-xs text-gray-400 mt-3'>核心港险功能三档完全一样，不做阉割；差别只在额度、新功能与服务强度。</p>
    </div>
  )
}
