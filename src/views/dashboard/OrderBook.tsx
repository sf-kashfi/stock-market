import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material'

interface BestLimitItem {
  number: number
  qTitMeDem: number
  zOrdMeDem: number
  pMeDem: number
  pMeOf: number
  zOrdMeOf: number
  qTitMeOf: number
}

interface OrderBookProps {
  bestLimits: BestLimitItem[]
}

const formatNumber = (num: number) => {
  return num.toLocaleString('fa-IR')
}

const OrderBook: React.FC<OrderBookProps> = ({ bestLimits }) => {
  return (
    <TableContainer component={Paper} sx={{ direction: 'rtl' }}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>تعداد</TableCell>
            <TableCell align='center'>حجم</TableCell>
            <TableCell align='center'>خرید</TableCell>
            <TableCell align='center'>فروش</TableCell>
            <TableCell align='center'>حجم</TableCell>
            <TableCell align='center'>تعداد</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {bestLimits.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{
                transition: 'background-color 0.4s ease'
              }}
            >
              {/* خرید */}
              <TableCell align='center' sx={{ color: 'success.main', fontWeight: 600 }}>
                {formatNumber(row.pMeDem)}
              </TableCell>
              <TableCell align='center' sx={{ color: 'success.main', fontWeight: 600 }}>
                {formatNumber(row.qTitMeDem)}
              </TableCell>
              <TableCell align='center' sx={{ color: 'success.main', fontWeight: 600 }}>
                {formatNumber(row.zOrdMeDem)}
              </TableCell>

              {/* فروش */}
              <TableCell align='center' sx={{ color: 'error.main', fontWeight: 600 }}>
                {formatNumber(row.zOrdMeOf)}
              </TableCell>
              <TableCell align='center' sx={{ color: 'error.main', fontWeight: 600 }}>
                {formatNumber(row.qTitMeOf)}
              </TableCell>
              <TableCell align='center' sx={{ color: 'error.main', fontWeight: 600 }}>
                {formatNumber(row.pMeOf)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrderBook
