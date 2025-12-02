import 'server-only'

// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { Settings } from '@/contexts/settingsContext'

// Config Imports
import themeConfig from '@configs/themeConfig'

export const getSettingsFromCookie = (): Settings => {
  const cookieStore = cookies()

  const cookieName = themeConfig.settingsCookieName

  return JSON.parse(cookieStore.get(cookieName)?.value || '{}')
}

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie()

  // Get mode from cookie or fallback to theme config
  const _mode = settingsCookie.mode || themeConfig.mode

  return _mode
}
