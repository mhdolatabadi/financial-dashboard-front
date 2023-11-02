import { Box, Button, Typography } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
import { Section } from './Section'

interface Props {
  header: string
  children: ReactElement | ReactElement[] | ReactNode[]
  action?: string
  Icon?: JSX.Element
  onAction?: () => unknown
}

export function SectionWithHeader({ children, header, Icon, onAction, action }: Props) {
  return (
    <Section>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          paddingBottom: '5px',
          borderBottom: '2px solid black',
          borderColor: 'primary.user',
          marginBottom: '15px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              margin: '0 0 0 10px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {Icon ?? null}
          </div>
          <Typography color='primary' fontSize='20px' fontWeight='600'>
            {header}
          </Typography>
        </div>
        {onAction && action && <Button onClick={onAction}>{action}</Button>}
      </Box>
      {children}
    </Section>
  )
}
