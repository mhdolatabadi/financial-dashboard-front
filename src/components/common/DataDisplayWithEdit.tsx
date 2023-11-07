import {
  Box,
  Divider,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
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
          width: '100%',
          height: '50px',
          justifyContent: 'space-between',
          borderRadius: '20px',
          backgroundColor: '#0001',
          borderColor: 'primary.main',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            bgcolor: 'primary.main',
            width: '50%',
            height: '100%',
            borderRadius: '20px 0 0 20px',
          }}
        >
          <Typography
            color="white"
            fontWeight="500"
            fontSize="15px"
            textAlign="left"
          >
            {label}
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '10px',
          }}
        >
          <Typography fontWeight="500" color="#000d">
            {value}
          </Typography>
        </Stack>
        <Divider />
      </div>
    </RowFlex>
  )
}
