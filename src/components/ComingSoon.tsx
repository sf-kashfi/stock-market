'use client'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { keyframes } from '@mui/system'

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`

const glow = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`

const ComingSoon = () => {
  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={160}
          sx={{
            animation: `${float} 3s ease-in-out infinite`,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              background: 'linear-gradient(90deg, #888, #aaa, #888)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: `${glow} 2s ease-in-out infinite`,
            }}
          >
            در حال ساخت ...
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ComingSoon
