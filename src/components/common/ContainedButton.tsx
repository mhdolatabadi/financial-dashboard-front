import { Button, SxProps } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  sx?: SxProps
  onClick: () => unknown
}

export function ContainedButton({ children, sx, onClick }: Props) {
  return (
    <Button
      onSubmit={onClick}
      onClick={onClick}
      variant="contained"
      sx={{
        width: '100%',
        borderRadius: '20px',
        padding: '10px',
        fontSize: '18px',
        margin: '10px 0',
        ...sx,
      }}
    >
      {children}
    </Button>
  )
}
