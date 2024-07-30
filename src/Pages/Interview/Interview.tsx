import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

import Button from '../../Components/Button/Button';
import { ButtonTypes } from '../../Components/Button/ButtonTypes';
import DataTable from '../../Components/Table/Table'
import RescheduleModal from './Component/scheduleForm';
import style from './styles/Interview.module.css'

interface Interview {
  fullName: string;
  auth: { email: string };
  phone: string;
  position: string;
  date: string;
  time: string;
  cvAttachment: string;
  notes: string;
  phase:string;
}

interface RowData {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  date: string;
  time: string;
  cvAttachment: string;
  notes: string;
  phase: string;
}

const dummyInterviews: Interview[] = [
  {
    fullName: "Artemisa Nuri",
    auth: { email: "artemisa.nuri@example.com" },
    phone: "123-456-7890",
    position: "Software Engineer",
    date: "2024-07-25",
    time: "14:00",
    cvAttachment: "artemisa_nuri_cv.pdf",
    notes: "interview scheduled",

    phase: "First Interview",
  },
  {
    fullName: "Gerti Kadiu",
    auth: { email: "gerti.kadiu@example.com" },
    phone: "987-654-3210",
    position: "Project Manager",
    date: "2024-07-26",
    time: "10:30",
    cvAttachment: "gerti_kadiu_cv.pdf",
    notes: "interview scheduled",
    phase: "First Interview",

  },
  {
    fullName: "Redi Balla",
    auth: { email: "redi.balla@example.com" },
    phone: "456-789-0123",
    position: "UX Designer",
    date: "2024-07-27",
    time: "11:00",
    cvAttachment: "redi_balla_cv.pdf",
    notes: "interview scheduled",
    phase: "First Interview",

  },
  {
    fullName: "Vasjan Cupri",
    auth: { email: "vasjan.cupri@example.com" },
    phone: "789-012-3456",
    position: "Data Scientist",
    date: "2024-07-28",
    time: "15:30",
    cvAttachment: "vasjan_cupri_cv.pdf",
    notes: "interview scheduled",
    phase: "First Interview",

  },
  {
    fullName: "Selma Bakiu",
    auth: { email: "selma.bakiu@example.com" },
    phone: "234-567-8901",
    position: "Game Developer",
    date: "2024-07-29",
    time: "13:00",
    cvAttachment: "selma_bakiu_cv.pdf",
    notes: "interview scheduled",
    phase: "First Interview",

  },
  {
    fullName: "Gerald Bane",
    auth: { email: "bane.gerald@example.com" },
    phone: "234-567-8901",
    position: " Fullstack Developer",
    date: "2024-07-29",
    time: "13:00",
    cvAttachment: "gerald_bane_cv.pdf",
    notes: " Great skills ",
    phase: "First Interview",

  },
];

export default function Interview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);

  const [interviews, setInterviews] = useState<Interview[]>(dummyInterviews);
  const [isReschedule, setIsReschedule] = useState(false);

  const [rows, setRows] = useState<RowData[]>(interviews.map((interview, index) => ({
    id: index + 1,
    fullName: interview.fullName,
    email: interview.auth?.email,
    phone: interview.phone,
    position: interview.position,
    date: interview.date,
    time: interview.time,
    cvAttachment: interview.cvAttachment,
    notes: interview.notes,
    phase: interview.phase,
  })));
  useEffect(() => {
    setRows(interviews.map((interview, index) => ({
      id: index + 1,
      fullName: interview.fullName,
      email: interview.auth?.email,
      phone: interview.phone,
      position: interview.position,
      date: interview.date,
      time: interview.time,
      cvAttachment: interview.cvAttachment,
      notes: interview.notes,
      phase: interview.phase,

    })));
  }, [interviews]);

  const handleOpenModal = (interview: Interview, isReschedule: boolean = false) => {
    setSelectedInterview(interview);
    setIsModalOpen(true);
    setIsReschedule(isReschedule);

  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInterview(null);
  };

  const handleReschedule = (date: string, time: string) => {
    if (selectedInterview) {
      const updatedInterviews = interviews.map(interview => 
        interview.fullName === selectedInterview.fullName
        ? { ...interview, date, time, phase: isReschedule ? interview.phase : 'Second Interview' }
        : interview
      );
      setInterviews(updatedInterviews);
    }
    handleCloseModal();
  };
  const handleCancel = (interview: Interview) => {
    const isConfirmed = window.confirm(`Are you sure you want to cancel the interview with ${interview.fullName}?`);
    if (isConfirmed) {
      const updatedInterviews = interviews.filter(i => i.fullName !== interview.fullName);
      setInterviews(updatedInterviews);
      handleCloseModal();
    }
  };

  const handleAccept = (interview: Interview) => {
    handleOpenModal(interview, false);
  };
  

  const columns = [
    { field: 'id', headerName: 'No', width: 20 },
    { field: 'fullName', headerName: ' Name', flex:1 },
    { field: 'email', headerName: 'Email', flex:1 },
    { field: 'phone', headerName: 'Phone', flex:1 },
    { field: 'position', headerName: 'Position', flex:1 },
    { field: 'date', headerName: 'Date' ,flex:1},
    { field: 'time', headerName: 'Time', width:60  },
    { field: 'cvAttachment', headerName: 'CV', flex:1 },
    { field: 'phase', headerName: 'Phase', flex:1  },
    {field: 'notes', headerName: 'Notes', flex:1  },
    {
      field: 'reschedule',
      headerName: 'Reschedule',
      width: 120,
      renderCell: (params: GridRenderCellParams) => (
        <div style={{ display: "flex", justifyContent: "center" , gap:"5px", paddingTop:"10px"}}>

        <Button 
          type={ButtonTypes.PRIMARY}
          btnText=""
          width="60px"
          height="30px"
          display='flex'
          justifyContent='center'
          alignItems='center'
          icon={<HistoryIcon />}
      
          onClick={() => handleOpenModal(params.row as Interview)}
        />
</div>
      ),
    },
    {field : 'manage', headerName: 'Manage', width: 120, renderCell: (params: GridRenderCellParams)=>(
     <div style={{ display: "flex", justifyContent: "center" , gap:"5px", paddingTop:"10px"}}>
      <Button
      btnText=''
        type={ButtonTypes.PRIMARY}
        width="60px"
        height="30px"
        backgroundColor='#40a829'
        borderColor='#40a829'
        display='flex'
        justifyContent='center'
        alignItems='center'
        icon={<CheckIcon />}
        onClick={() => handleAccept(params.row as Interview)}
></Button>
<Button
      btnText=''
        type={ButtonTypes.PRIMARY}
        width="60px"
        height="30px"
        backgroundColor='#C70039'
        borderColor='#C70039'
        display='flex'
        justifyContent='center'
        alignItems='center'
        icon={<CloseIcon />}
        onClick={() => handleCancel(params.row as Interview)}>
</Button>

</div>
    )}
  ];

  const getRowId = (row: RowData) => row.id;

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column", padding: "0 16px", backgroundColor: "#f0f5ff" }}>
      <div className={style.title}>Interviews</div>
      <DataTable rows={rows} columns={columns} getRowId={getRowId} />
      {selectedInterview && (
        <RescheduleModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          handleReschedule={handleReschedule}
          selectedInterview={selectedInterview}
          handleCancel={() => selectedInterview && handleCancel(selectedInterview)}
          />
      )}
    </div>
  );
}