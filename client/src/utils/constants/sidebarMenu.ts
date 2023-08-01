import { Icon } from '@icon-park/react/lib/runtime'
import { BookmarkOne, HomeTwo, People, SettingOne, Wechat } from '@icon-park/react'

export const sidebarMenus: ISidebar[] = [
  {
    Icon: HomeTwo,
    name: 'Home',
    href: '/'
  },
  {
    Icon: Wechat,
    name: 'Messages',
    href: '/messages'
  },
  {
    Icon: People,
    name: 'Profile',
    href: ''
  },
  {
    Icon: BookmarkOne,
    name: 'Saved Post',
    href: '/saved-post'
  },
  {
    Icon: SettingOne,
    name: 'Settings',
    href: '/settings'
  }
]

export type ISidebar = {
  Icon: Icon
  name: string
  href: string
}
