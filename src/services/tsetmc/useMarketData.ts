// Type Imports
import type { BestLimitsResponse } from '@/types/types'

// Hook Imports
import {
  useStaticData,
  useTime,
  useMsg,
  useInstrumentStateTop,
  usePreparedData,
  useInstrument,
  useCodal,
  useClosingPriceDaily,
  useTrade,
  useBestLimits,
  useClosingPriceInfo,
  useClientType,
  useMarketOverview1,
  useMarketOverview2,
  useRelatedCompany
} from './hooks'

// Vars
const insCode = '778253364357513'

interface UseMarketDataReturn {
  staticData: any
  time: any
  msg: any
  instrumentStateTop: any
  preparedData: any
  instrument: any
  codal: any
  closingPriceDaily: any
  trade: any
  top5BestLimits: ReturnType<typeof useBestLimits>
  closingPriceInfo: any
  clientType: any
  marketOverview1: any
  marketOverview2: any
  relatedCompany: any
}

export const useMarketData = (): UseMarketDataReturn => {
  const staticData = useStaticData()
  const time = useTime()
  const msg = useMsg()
  const instrumentStateTop = useInstrumentStateTop()
  const preparedData = usePreparedData()
  const instrument = useInstrument(insCode)
  const codal = useCodal(insCode)
  const closingPriceDaily = useClosingPriceDaily(insCode)
  const trade = useTrade(insCode)
  const top5BestLimits = useBestLimits(insCode)
  const closingPriceInfo = useClosingPriceInfo(insCode)
  const clientType = useClientType(insCode)
  const marketOverview1 = useMarketOverview1()
  const marketOverview2 = useMarketOverview2()
  const relatedCompany = useRelatedCompany()

  return {
    staticData,
    time,
    msg,
    instrumentStateTop,
    preparedData,
    instrument,
    codal,
    closingPriceDaily,
    trade,
    top5BestLimits,
    closingPriceInfo,
    clientType,
    marketOverview1,
    marketOverview2,
    relatedCompany
  }
}
