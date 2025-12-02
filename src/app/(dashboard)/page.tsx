'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import OrderBook from '@views/dashboard/OrderBook'
import CardSkeleton from '@/components/skeletons/CardSkeleton'
import ComingSoon from '@/components/ComingSoon'

// Hooks
import { useMarketData } from '@/services/tsetmc/useMarketData'

const Dashboard = () => {
  const {
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
  } = useMarketData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} lg={12}>
        {staticData.isLoading ? <CardSkeleton /> : <ComingSoon />}
      </Grid>
      <Grid item xs={12} md={5} lg={5}>
        {top5BestLimits.isLoading ? <CardSkeleton /> : <OrderBook bestLimits={top5BestLimits.data?.bestLimits || []} />}
      </Grid>
      <Grid item xs={12} md={7} lg={7}>
        {trade.isLoading ? <CardSkeleton /> : <ComingSoon />}
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        {relatedCompany.isLoading ? <CardSkeleton /> : <ComingSoon />}
      </Grid>
      <Grid item xs={12} lg={6}>
        {closingPriceInfo.isLoading ? <CardSkeleton /> : <ComingSoon />}
      </Grid>
      <Grid item xs={12}>
        {closingPriceDaily.isLoading ? <CardSkeleton /> : <ComingSoon />}
      </Grid>
    </Grid>
  )
}

export default Dashboard
