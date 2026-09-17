import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import Logo from './Logo'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * 注意：原模板页脚写的是 NotionNext 上游的文档与博客链接，已全部替换为本站真实信息。
 */
export default function Footer () {
  return (
    <footer id='contact'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>

        {/* Top area: Blocks */}
        <div className='grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200'>

          {/* 1st block */}
          <div className='sm:col-span-12 lg:col-span-5'>
            <div className='mb-2'>
              <Logo />
            </div>
            <div className='text-sm text-gray-600'>
              {siteConfig('BIO', '用技术解决真实效率问题')}
            </div>
          </div>

          {/* 2nd block：联系方式（全站唯一的行动信息） */}
          <div className='sm:col-span-6 md:col-span-6 lg:col-span-4'>
            <h6 className='text-gray-800 font-medium mb-2'>加我微信</h6>
            <ul className='text-sm'>
              <li className='mb-2'>
                <span className='text-gray-900 font-bold text-base'>SidShine</span>
              </li>
              <li className='mb-2 text-gray-600'>
                加上后我会先问你团队几个人、现在怎么管客户，然后发你一段 3 分钟演示录屏。
              </li>
              <li className='mb-2 text-gray-600'>
                工作日 9:00–18:30，一般 2 小时内回。
              </li>
            </ul>
          </div>

          {/* 3rd block */}
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

        {/* Bottom area */}
        <div className='md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200'>
          <div className='text-sm text-gray-600 mr-4'>
            &copy; {siteConfig('SINCE', '2026')} {siteConfig('AUTHOR', 'Sidney')} · 港险 AI 助手
          </div>
        </div>

      </div>
    </footer>
  )
}
