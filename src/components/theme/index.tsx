'use client'

// React Imports
import { useMemo } from 'react'

// MUI Imports
import { deepmerge } from '@mui/utils'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  lighten,
  darken
} from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'

// Type Imports
import type { ChildrenType, Direction, SystemMode } from '@/types/types'

// Component Imports
import ModeChanger from './ModeChanger'

// Config Imports
import themeConfig from '@configs/themeConfig'
import primaryColorConfig from '@configs/primaryColorConfig'

// Hook Imports
import { useSettings } from '@/hooks/useSettings'

// Theme Options Imports
import spacing from './spacing'
import shadows from './shadows'

type Props = ChildrenType & {
  direction: Direction
}

const ThemeProvider = (props: Props) => {
  // Props
  const { children, direction } = props

  // Hooks
  const { settings } = useSettings()

  const theme = useMemo(() => {
    const currentMode: SystemMode = settings.mode || 'light'

    const themeObject = {
      direction,
      ...spacing,
      shape: {
        borderRadius: 6,
        customBorderRadius: {
          xs: 2,
          sm: 4,
          md: 6,
          lg: 8,
          xl: 10
        }
      },
      typography: { fontFamily: 'var(--font-vazirmatn), Arial, sans-serif' },
      shadows: shadows(currentMode),
      colorSchemes: {
        light: {
          palette: {
            background: {
              default: '#F4F5FA',
              paper: '#ffffff'
            },

            primary: {
              main: '#8C57FF',
              light: '#A379FF',
              dark: '#7E4EE6',
              lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
            },

            secondary: {
              main: '#8A8D93',
              light: '#A1A4A9',
              dark: '#7C7F84',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
            },

            success: {
              main: '#56CA00',
              light: '#78D533',
              dark: '#4DB600',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
            },

            error: {
              main: '#FF4C51',
              light: '#FF7074',
              dark: '#E64449',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
            },

            warning: {
              main: '#FFB400',
              light: '#FFC333',
              dark: '#E6A200',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
            },

            info: {
              main: '#16B1FF',
              light: '#45C1FF',
              dark: '#149FE6',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
            },

            text: {
              primary: `rgb(var(--mui-mainColorChannels-light) / 0.9)`,
              secondary: `rgb(var(--mui-mainColorChannels-light) / 0.7)`,
              disabled: `rgb(var(--mui-mainColorChannels-light) / 0.4)`,
              primaryChannel: 'var(--mui-mainColorChannels-light)',
              secondaryChannel: 'var(--mui-mainColorChannels-light)'
            }
          }
        },

        dark: {
          palette: {
            background: {
              default: '#28243D',
              paper: '#312D4B'
            },

            primary: {
              main: '#8C57FF',
              light: '#A379FF',
              dark: '#7E4EE6',
              lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
            },

            secondary: {
              main: '#8A8D93',
              light: '#A1A4A9',
              dark: '#7C7F84',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
            },

            error: {
              main: '#FF4C51',
              light: '#FF7074',
              dark: '#E64449',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
            },

            warning: {
              main: '#FFB400',
              light: '#FFC333',
              dark: '#E6A200',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
            },

            info: {
              main: '#16B1FF',
              light: '#45C1FF',
              dark: '#149FE6',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
            },

            success: {
              main: '#56CA00',
              light: '#78D533',
              dark: '#4DB600',
              contrastText: '#fff',
              lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
              lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
              mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
              darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
              darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
            },

            text: {
              primary: `rgb(var(--mui-mainColorChannels-dark) / 0.9)`,
              secondary: `rgb(var(--mui-mainColorChannels-dark) / 0.7)`,
              disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.4)`,
              primaryChannel: 'var(--mui-mainColorChannels-dark)',
              secondaryChannel: 'var(--mui-mainColorChannels-dark)'
            }
          }
        }
      },
      components: {
        MuiTableRow: {
          styleOverrides: {
            root: {
              '&:nth-of-type(even)': {
                backgroundColor: 'rgba(0,0,0,0.02)'
              }
            }
          }
        }
      }
    }

    return extendTheme(themeObject)
  }, [settings.mode, direction])

  return (
    <AppRouterCacheProvider options={{ prepend: true }}>
      <CssVarsProvider
        theme={theme}
        defaultMode={settings.mode}
        modeStorageKey={`${themeConfig.templateName.toLowerCase().split(' ').join('-')}-mui-template-mode`}
      >
        <>
          <ModeChanger />
          <CssBaseline />
          {children}
        </>
      </CssVarsProvider>
    </AppRouterCacheProvider>
  )
}

export default ThemeProvider
