import { apiGet } from './http'

export const getStaticData = () => apiGet('/StaticData/GetStaticData')

export const getInstrumentInfo = (insCode: string) => apiGet(`/Instrument/GetInstrumentInfo/${insCode}`)

export const getCodal = (insCode: string) => apiGet(`/Codal/GetPreparedDataByInsCode/9/${insCode}`)

export const getClosingPriceDaily = (insCode: string) => apiGet(`/ClosingPrice/GetClosingPriceDailyList/${insCode}/12`)

export const getTime = () => apiGet('/StaticData/GetTime')

export const getMsg = () => apiGet('/Msg/GetMsgByFlow/0/1')

export const getInstrumentStateTop = () => apiGet('/MarketData/GetInstrumentStateTop/1')

export const getPreparedData = () => apiGet('/Codal/GetPreparedData/1')

export const getTrade = (insCode: string) => apiGet(`/Trade/GetTrade/${insCode}`)
