'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'

interface Props {
  lines?: number
  height?: number
}

const CardSkeleton = ({ lines = 3, height = 20 }: Props) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" gap={2}>
          {[...Array(lines)].map((_, i) => (
            <Skeleton key={i} variant="rectangular" width="100%" height={height} />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardSkeleton
