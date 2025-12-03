'use client'

// React Query Imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Context Imports
import { VerticalNavProvider } from '@/contexts/verticalNavContext'
import { SettingsProvider } from '@/contexts/settingsContext'
import ThemeProvider from '@components/theme'

// Type Imports
import type { Mode } from '@/types/types'

type Props = {
  children: React.ReactNode
  direction: 'ltr' | 'rtl'
  mode: Mode
  settingsCookie: any
}

// QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

const Providers = (props: Props) => {
  // Props
  const { children, direction, mode, settingsCookie } = props

  return (
    <QueryClientProvider client={queryClient}>
      <VerticalNavProvider>
        <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
          <ThemeProvider direction={direction}>
            {children}
          </ThemeProvider>
        </SettingsProvider>
      </VerticalNavProvider>
    </QueryClientProvider>
  )
}

export default Providers
