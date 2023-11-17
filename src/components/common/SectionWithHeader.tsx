import { Box, Button, SxProps, Typography } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import { Section } from './Section'

interface Props {
  header: string
  children: ReactElement | ReactElement[] | ReactNode[]
  action?: string
  Icon?: JSX.Element
  sx?: SxProps
  onAction?: () => unknown
}

export function SectionWithHeader({
  children,
  header,
  Icon,
  onAction,
  action,
  sx,
}: Props) {
  return (
    <Section sx={sx}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          width: '100%',
          background: '#fff5',
          padding: '20px',
          boxSizing: 'border-box',
          borderRadius: '20px',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: '20px',
            padding: '10px',
            boxSizing: 'border-box',
            marginBottom: '15px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                margin: '0 0 0 10px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {Icon ?? null}
            </div>
            <Typography color="primary" fontSize="20px" fontWeight="600">
              {header}
            </Typography>
          </div>
          {onAction && action ? (
            <Button
              variant="outlined"
              sx={{
                width: '100px',
                height: '50px',
                borderRadius: '20px',
                background: '#fff5',
              }}
              onClick={onAction}
            >
              {action}
            </Button>
          ) : null}
        </div>
        {children}
      </Box>
    </Section>
  )
}
