import { Button, TextField, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'

const RowFlex = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'cetner',
  justifyContent: 'space-evenly',
  border: '2px solid white',
}))
interface Props {
  label: string
  value: number | string | undefined | null
  isAdmin: boolean
  onEdit: (value: string) => unknown
}
export function DataDisplayWithEdit({ label, value, onEdit, isAdmin }: Props) {
  const [editMode, setEditMode] = useState(false)
  const [newValue, setNewValue] = useState(value)
  useEffect(() => {
    setNewValue(value)
  }, [value])
  const handleEditButtonClick = () => {
    if (!editMode) {
      setEditMode(true)
    } else {
      onEdit(String(newValue))
      setEditMode(false)
    }
  }
  const handleCancelEdit = () => {
    setEditMode(false)
  }
  return (
    <RowFlex>
      <Typography color="primary" fontWeight="500">
        {label}
      </Typography>
      {editMode && isAdmin ? (
        <TextField
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        ></TextField>
      ) : (
        <Typography>{newValue ?? 'وارد نشده'}</Typography>
      )}
      {isAdmin ? (
        <Button onClick={() => handleEditButtonClick()}>
          {editMode ? 'ذخیره' : <EditIcon />}
        </Button>
      ) : null}
      {editMode ? (
        <Button onClick={handleCancelEdit} color="error">
          انصراف
        </Button>
      ) : null}
    </RowFlex>
  )
}
