import { Divider, styled, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const RowFlex = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  border: '2px solid white',
}))

interface Props {
  label: string
  value: string | undefined
  editMode?: boolean
  onEdit?: (value: string) => unknown
}

export function DataDisplayWithEdit({ label, value, onEdit, editMode }: Props) {
  return (
    <RowFlex>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: '15px 0 10px',
          height: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <Typography
            color="primary"
            fontWeight="500"
            fontSize="15px"
            textAlign="left"
          >
            {label}
          </Typography>
          <Typography fontWeight="500" color="#000d">
            {value}
          </Typography>
        </div>
        <Divider />
      </div>
    </RowFlex>
  )
}
