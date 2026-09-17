import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import Logo from './Logo'
import { siteConfig } from '@/lib/config'

/**
 * 页脚 / 联系区块
 * 原模板页脚写的是 NotionNext 上游的文档与博客链接，已全部替换为本站真实信息。
 * 文案走 Notion 配置（LANDING_CONTACT_*），改字不用改代码。
 */
export default function Footer () {
  const title = siteConfig('LANDING_CONTACT_TITLE', '加我微信', CONFIG)
  const wechatId = siteConfig('LANDING_CONTACT_ID', 'SidShine', CONFIG)
  const text = siteConfig('LANDING_CONTACT_TEXT', '加上后我把演示发你，你先看看合不合适。', CONFIG)
  const notes = [
    siteConfig('LANDING_CONTACT_NOTE_1', '不用先说需求', CONFIG),
    siteConfig('LANDING_CONTACT_NOTE_2', '不用留手机号', CONFIG),
    siteConfig('LANDING_CONTACT_NOTE_3', '不用先付费', CONFIG)
  ].filter(Boolean)
  const hours = siteConfig('LANDING_CONTACT_HOURS', '工作日 9:00–18:30 在线', CONFIG)

  return (
    <footer id='contact'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>

        <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200'>

          {/* 品牌 */}
          <div className='sm:col-span-12 lg:col-span-5'>
            <div className='mb-2'>
              <Logo />
            </div>
            <div className='text-sm text-gray-600'>
              {siteConfig('BIO', '用技术解决真实效率问题')}
            </div>
          </div>

          {/* 联系方式 */}
          <div className='sm:col-span-6 md:col-span-6 lg:col-span-4'>
            <h6 className='text-gray-800 font-medium mb-2'>{title}</h6>
            <div className='text-gray-900 font-bold text-base mb-2'>{wechatId}</div>
            <p className='text-sm text-gray-600 mb-3'>{text}</p>
            <ul className='text-sm text-gray-600 space-y-1'>
              {notes.map((n, i) => <li key={i}>· {n}</li>)}
            </ul>
          </div>

          {/* 站内锚点 */}
          <div className='sm:col-span-6 md:col-span-6 lg:col-span-3'>
            <h6 className='text-gray-800 font-medium mb-2'>站内</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <SmartLink href='/#pricing' className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>套餐价格</SmartLink>
              </li>
              <li className='mb-2'>
                <SmartLink href='/#contact' className='text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out'>联系方式</SmartLink>
              </li>
            </ul>
          </div>

        </div>

        <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
          <div className='text-sm text-gray-600 mr-4'>
            &copy; {siteConfig('SINCE', '2026')} {siteConfig('AUTHOR', 'Sidney')} · 港险 AI 助手
          </div>
          <div className='text-sm text-gray-400 mt-2 md:mt-0'>{hours}</div>
        </div>

      </div>
    </footer>
  )
}
