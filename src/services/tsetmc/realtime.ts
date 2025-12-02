import { apiGet } from './http'

// Type Imports
import type { BestLimitsResponse } from '@/types/types'

export const getBestLimits = (insCode: string) => apiGet<BestLimitsResponse>(`/BestLimits/${insCode}`)

export const getClosingPriceInfo = (insCode: string) => apiGet(`/ClosingPrice/GetClosingPriceInfo/${insCode}`)

export const getClientType = (insCode: string) => apiGet(`/ClientType/GetClientType/${insCode}/1/0`)

export const getMarketOverview1 = () => apiGet(`/MarketData/GetMarketOverview/1`)

export const getMarketOverview2 = () => apiGet(`/MarketData/GetMarketOverview/2`)

export const getRelatedCompany = () => apiGet(`/ClosingPrice/GetRelatedCompany/57`)
