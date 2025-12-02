// React Imports
import type { ReactNode } from 'react'

export type Skin = 'default' | 'bordered'

export type Mode = 'light' | 'dark'

export type SystemMode = 'light' | 'dark'

export type Direction = 'ltr' | 'rtl'

export type ChildrenType = {
  children: ReactNode
}

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export interface BestLimit {
  number: number;
  qTitMeDem: number;
  zOrdMeDem: number;
  pMeDem: number;
  pMeOf: number;
  zOrdMeOf: number;
  qTitMeOf: number;
  title?: string | null;
  insCode?: string | null;
}

export interface BestLimitsResponse {
  bestLimits: BestLimit[];
}

