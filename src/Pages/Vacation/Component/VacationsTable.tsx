import { CircularProgress } from '@mui/material'
import { useData } from '../Hook'
import { useContext } from 'react'
import DataTable from '@/Components/Table/Table'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { dateFormatter } from '@/Helpers/dateFormater'
import { tableUserPresenceFormatter } from '@/Helpers/tableUserPresenceFormatter'
import { VacationContext } from '../VacationContext'
import { Vacation } from '../TVacation'

// Icons
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen'
import PersonIcon from '@mui/icons-material/Person'
import CircleIcon from '@mui/icons-material/Circle'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import DoneAllIcon from '@mui/icons-material/DoneAll'

export default function VacationsTable() {
  const { error, loading } = useData()
  const { vacations } = useContext(VacationContext)
  if (error) return <div>Error: {error}</div>
  if (loading) return <CircularProgress />

  const rows = vacations!.map((vacation: Vacation, index: number) => ({
    id: index + 1,
    type: vacation.type[0].toUpperCase() + vacation.type.slice(1),
    status: vacation.status,
    startDate: vacation.startDate,
    endDate: vacation.endDate,
    fullName: vacation.userId,
  }))

  const columns = [
    {
      field: 'id',
      headerName: 'No',
      width: 80,
    },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (param: GridRenderCellParams) => (
        <span
          style={
            param.value === 'accepted'
              ? { color: '#d32f2f' }
              : param.value === 'rejected'
              ? { color: '#02A700' }
              : { color: 'gray' }
          }
        >
          {param.value}
        </span>
      ),
    },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      renderCell: (param: GridRenderCellParams) =>
        tableUserPresenceFormatter(param.value),
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
      renderCell: (param: GridRenderCellParams) => dateFormatter(param.value),
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
      renderCell: (param: GridRenderCellParams) => dateFormatter(param.value),
    },
  ]

  const getRowId = (row: { id: number | string }) => row.id

  const headerIcons = {
    id: FormatListNumberedIcon,
    type: TypeSpecimenIcon,
    fullName: PersonIcon,
    status: CircleIcon,
    startDate: PlayCircleOutlineIcon,
    endDate: DoneAllIcon,
  }

  return (
    <DataTable
      height={'62.75vh'}
      rows={rows}
      columns={columns}
      getRowId={getRowId}
      headerIcons={headerIcons}
      pageSizeOptions={[5, 10, 20, 50]}
    />
  )
}