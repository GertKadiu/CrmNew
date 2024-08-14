import { SearchOutlined as SearchIcon } from '@mui/icons-material'
import Input from '@/Components/Input/Index'
import {
  FormLabel,
  Radio,
  RadioGroup,
  Sheet,
  Box,
  radioClasses,
} from '@mui/joy'
import style from './style/vacation.module.scss'
import { useContext, useState } from 'react'
import { VacationContext } from './VacationContext'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { VacationTable } from './components/VacationTable'

export default function Vacation() {
  const [alignment, setAlignment] = useState('requests')
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment)
  }
  const { searchParams } = useContext(VacationContext)
  const pageToggleChoices = [
    {
      value: 'requests',
      label: 'Requests',
    },
    {
      value: 'userLeaves',
      label: 'User Leaves',
    },
  ]
  return (
    <main className={style.main}>
      <div className={style.heading}>
        <div className={style.title}>Vacation</div>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Leave"
        >
          {pageToggleChoices.map(({ value, label }) => (
            <ToggleButton
              sx={{
                padding: '0.5rem 1rem',
                fontSize: '0.8rem',
              }}
              key={value}
              value={value}
            >
              {label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div>
        <VacationTable />
      </div>
    </main>
  )
}
