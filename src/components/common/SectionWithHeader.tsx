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
          flexDirection: 'row',
          width: '100%',
          borderColor: 'primary.main',
          borderWidth: '0 0 1px 1px',
          borderStyle: 'solid',
          marginBottom: '15px',
          // bgcolor: '#0001',
          padding: '10px',
          boxSizing: 'border-box',
          borderRadius: '20px',
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
        {onAction && action && <Button onClick={onAction}>{action}</Button>}
      </Box>
      {children}
    </Section>
  )
}
