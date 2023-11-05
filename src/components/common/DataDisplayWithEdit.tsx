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
<<<<<<< HEAD
=======
  const [newValue, setNewValue] = useState(value)
  useEffect(() => {
    setNewValue(value)
  }, [value])

  useEffect(() => {
    if (onEdit && newValue) onEdit(newValue)
  }, [newValue])
>>>>>>> 54ba37360b77af2fd181cacd6acd38c29f4c6f17
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
<<<<<<< HEAD
          <Typography fontWeight="500" color="#000d">
            {value}
          </Typography>
=======
          {!editMode ? (
            <Typography fontWeight="500" color="#000d">
              {value}
            </Typography>
          ) : (
            <TextField
              size="small"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
          )}
>>>>>>> 54ba37360b77af2fd181cacd6acd38c29f4c6f17
        </div>
        <Divider />
      </div>
    </RowFlex>
  )
}
