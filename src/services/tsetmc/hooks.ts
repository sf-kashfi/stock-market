// React Query Imports
import { useQuery } from '@tanstack/react-query'

// Third-party Imports
import isEqual from 'lodash.isequal'

// Service Imports
import * as staticService from './static'
import * as realtime from './realtime'

// Type Imports
import type { BestLimitsResponse } from '@/types/types'

// One time queries
export function useStaticData() {
  return useQuery({
    queryKey: ['static-data'],
    queryFn: staticService.getStaticData
  })
}

export function useTime() {
  return useQuery({
    queryKey: ['time'],
    queryFn: staticService.getTime
  })
}

export function useMsg() {
  return useQuery({
    queryKey: ['msg'],
    queryFn: staticService.getMsg
  })
}

export function useInstrumentStateTop() {
  // const now = new Date()
  // const hour = now.getHours()
  // const minute = now.getMinutes()
  // const inTradingHours = (hour > 9 || (hour === 9 && minute >= 0)) && (hour < 12 || (hour === 12 && minute <= 30))
  return useQuery({
    queryKey: ['instrument-state-top'],
    queryFn: staticService.getInstrumentStateTop
  })
}

export function usePreparedData() {
  return useQuery({
    queryKey: ['prepared-data'],
    queryFn: staticService.getPreparedData
  })
}

export function useInstrument(insCode: string) {
  return useQuery({
    queryKey: ['instrument', insCode],
    queryFn: () => staticService.getInstrumentInfo(insCode)
  })
}

export function useCodal(insCode: string) {
  return useQuery({
    queryKey: ['codal', insCode],
    queryFn: () => staticService.getCodal(insCode)
  })
}

export function useClosingPriceDaily(insCode: string) {
  return useQuery({
    queryKey: ['closing-price-daily', insCode],
    queryFn: () => staticService.getClosingPriceDaily(insCode)
  })
}

export function useTrade(insCode: string) {
  return useQuery({
    queryKey: ['trade', insCode],
    queryFn: () => staticService.getTrade(insCode)
  })
}

// Realtime queries
export function useBestLimits(insCode: string) {
  return useQuery<BestLimitsResponse>({
    queryKey: ['bestlimits', insCode],
    queryFn: () => realtime.getBestLimits(insCode),
    refetchInterval: 14000,
    refetchIntervalInBackground: true,
    structuralSharing: (oldData, newData) => {
      if (!oldData) return newData
      return isEqual(oldData, newData) ? oldData : newData
    }
  })
}

export function useClosingPriceInfo(insCode: string) {
  return useQuery({
    queryKey: ['closingPriceInfo', insCode],
    queryFn: () => realtime.getClosingPriceInfo(insCode),
    refetchInterval: 14000,
    refetchIntervalInBackground: true,
    structuralSharing: (oldData, newData) => {
      if (!oldData) return newData
      return isEqual(oldData, newData) ? oldData : newData
    }
  })
}

export function useClientType(insCode: string) {
  return useQuery({
    queryKey: ['clientType', insCode],
    queryFn: () => realtime.getClientType(insCode),
    refetchInterval: 14000,
    refetchIntervalInBackground: true,
    structuralSharing: (oldData, newData) => {
      if (!oldData) return newData
      return isEqual(oldData, newData) ? oldData : newData
    }
  })
}

export function useMarketOverview1() {
  return useQuery({
    queryKey: ['marketOverview-1'],
    queryFn: () => realtime.getMarketOverview1,
    refetchInterval: 14000,
    refetchIntervalInBackground: true,
    structuralSharing: (oldData, newData) => {
      if (!oldData) return newData
      return isEqual(oldData, newData) ? oldData : newData
    }
  })
}

export function useMarketOverview2() {
  return useQuery({
    queryKey: ['marketOverview-2'],
    queryFn: () => realtime.getMarketOverview2,
    refetchInterval: 14000,
    refetchIntervalInBackground: true,
    structuralSharing: (oldData, newData) => {
      if (!oldData) return newData
      return isEqual(oldData, newData) ? oldData : newData
    }
  })
}

export function useRelatedCompany() {
  return useQuery({
    queryKey: ['relatedCompany'],
    queryFn: () => realtime.getRelatedCompany,
    refetchInterval: 14000,
    refetchIntervalInBackground: true,
    structuralSharing: (oldData, newData) => {
      if (!oldData) return newData
      return isEqual(oldData, newData) ? oldData : newData
    }
  })
}
