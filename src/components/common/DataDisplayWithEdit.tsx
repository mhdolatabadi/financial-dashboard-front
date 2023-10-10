import { Button, TextField, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'

const RowFlex = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
  color: theme.palette.secondary.main,
  border: '2px solid white',
}))
interface Props {
  label: string
  value: number | string | undefined | null
  onEdit: (value: string) => unknown
}
export function DataDisplayWithEdit({ label, value, onEdit }: Props) {
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
      <Typography>{label}</Typography>
      {editMode ? (
        <TextField
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        ></TextField>
      ) : (
        <Typography>{newValue ?? 'وارد نشده'}</Typography>
      )}
      <Button onClick={() => handleEditButtonClick()}>
        {editMode ? 'ذخیره' : 'ویرایش'}
      </Button>
      {editMode ? (
        <Button onClick={handleCancelEdit} color="error">
          انصراف
        </Button>
      ) : null}
    </RowFlex>
  )
}
