import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 首屏
 * 结构（按「想要 → 相信 → 行动」三层排）：
 *   ① 标签：一句话说清是什么、住在哪
 *   ② 主标题：结果导向，勾住人往下看                     ← 想要
 *   ③ 副标题：加深印象 + 点出与通用 AI 的差距              ← 想要
 *   ④ 四格：与通用 AI 的差别（结果论）                    ← 相信
 *   ⑤ 活动条：价值讲完之后才报价，作为首屏收尾             ← 行动
 *
 * ⚠️ 顺序原则：**行动层（价格 / 活动）必须排在相信层之后。**
 *    价格若出现在「凭什么值」之前，读者会拿它去比「免费的通用 AI」，
 *    而不是比「一个记得住他所有客户的成交陪跑教练」—— 锚点就错了。
 * ⚠️ 首屏不放任何按钮 —— 转化入口在右上角导航与页脚，首屏的位置只用来吸引与说服。
 */
export default function Hero() {
  // 注意：siteConfig 内部会调用 hook，必须显式展开、不能写在循环里
  const vs = [
    { t: siteConfig('LANDING_HERO_VS_1_TITLE', null, CONFIG), p: siteConfig('LANDING_HERO_VS_1_P', null, CONFIG) },
    { t: siteConfig('LANDING_HERO_VS_2_TITLE', null, CONFIG), p: siteConfig('LANDING_HERO_VS_2_P', null, CONFIG) },
    { t: siteConfig('LANDING_HERO_VS_3_TITLE', null, CONFIG), p: siteConfig('LANDING_HERO_VS_3_P', null, CONFIG) },
    { t: siteConfig('LANDING_HERO_VS_4_TITLE', null, CONFIG), p: siteConfig('LANDING_HERO_VS_4_P', null, CONFIG) }
  ].filter(c => c.t)

  const tag = siteConfig('LANDING_HERO_TAG', null, CONFIG)
  const vsTitle = siteConfig('LANDING_HERO_VS_TITLE', null, CONFIG)

  return (
        <section className="relative">

            {/* Illustration behind hero content */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-28 pb-12 md:pt-36 md:pb-16">

                    {/* ① 标签 ② 主标题 ③ 副标题 */}
                    <div className="text-center pb-8 md:pb-10">
                        {tag && (
                            <div className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide text-blue-700 bg-blue-50 border border-blue-100" data-aos="zoom-y-out">
                                {tag}
                            </div>
                        )}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-5" data-aos="zoom-y-out">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{siteConfig('LANDING_HERO_TITLE_1', null, CONFIG)}</span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400" data-aos="zoom-y-out" data-aos-delay="150">{siteConfig('LANDING_HERO_P_1', null, CONFIG)}</p>
                        </div>
                    </div>

                    {/* ④ 与通用 AI 的差别（相信层：先把「凭什么值」讲完） */}
                    {vs.length > 0 && (
                        <div className="max-w-4xl mx-auto" data-aos="zoom-y-out" data-aos-delay="250">
                            {vsTitle && (
                                <div className="text-center mb-5">
                                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">{vsTitle}</h2>
                                </div>
                            )}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {vs.map((c, i) => (
                                    <div key={i} className="bg-white/80 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-5 shadow-sm text-left">
                                        <div className="font-bold text-gray-900 dark:text-white mb-1.5 leading-snug">{c.t}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{c.p}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 活动条：已移除（2026-09-26）
                        原因：活动信息在「四件事」第 6 卡、价格区标签、卡片划线原价、对比表表头
                        等多处已出现，首屏再放一次属于重复。
                        首屏只负责「想要 → 相信」，行动层信息交给价格区。
                        需要的配置键仍在（LANDING_HERO_OFFER_*），要恢复只需把这一段接回来。 */}

                </div>

            </div>
        </section>
  )
}
