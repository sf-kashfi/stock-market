// Component Imports
import Providers from './Providers'

// Type Imports
import type { ChildrenType, Direction } from '@/types/types'

// Util Imports
import { getMode, getSettingsFromCookie } from '@core/utils/serverHelpers'

type Props = ChildrenType & { direction: Direction }

export default function ProvidersWrapper({ children, direction }: Props) {
  // Vars
  const mode = getMode()
  const settingsCookie = getSettingsFromCookie()

  return (
    <Providers direction={direction} mode={mode} settingsCookie={settingsCookie}>
      {children}
    </Providers>
  )
}
