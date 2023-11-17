import { Divider, Stack, styled, Typography } from '@mui/material'
import { PersianTexts } from '../../utils/persianTexts'

const RowFlex = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  borderRadius: '20px',
  margin: '4px 0',
  backgroundColor: '#fffa',
}))

interface Props {
  label: string
  value: string | undefined
}

export function DataDisplay({ label, value }: Props) {
  return (
    <RowFlex>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '50px',
          justifyContent: 'space-between',
          borderRadius: '20px',
          backgroundColor: '#fffa',
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
            {value ?? PersianTexts.empty}
          </Typography>
        </Stack>
        <Divider />
      </div>
    </RowFlex>
  )
}
