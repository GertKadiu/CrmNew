export const inputStyles = {
  "& .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input": {
    verticalAlign: "bottom",
  },
  "& .MuiFormHelperText-root": {
    fontFamily: '"Outfit", sans-serif',
  },
  "& .MuiFilledInput-root": {
    border: "1px solid #999999",
    overflow: "hidden",
    backgroundColor: "transparent",
    borderRadius: 1,
    fontFamily: '"Outfit", sans-serif',
    color: "#000000",
    fontSize: "14px",

    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: "none",
      borderColor: "#999999",
      color: "#000000",
      fontSize: "14px",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#000000",
      borderColor: "#999999",
      fontSize: "14px",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "& .css-10botns-MuiInputBase-input-MuiFilledInput-input": {
      color: "#000000",
      fontSize: "14px",
      verticalAlign: "bottom",
    },
  },
}

export const chekboxStyles = {
  '& .MuiFormControlLabel-label': {
    fontFamily: '"Outfit", sans-serif',
  },
}

//#96bde4 color for header
//#

export const TableStyles = {
  backgroundColor: '#FFFFFF',
    fontFamily: '"Outfit", sans-serif',
    borderRadius: '5px',
    overflow: 'hidden',
    '& .MuiDataGrid-root': {
      fontFamily: '"Outfit", sans-serif',
      borderRadius: '5px',
    },
    '& .MuiDataGrid-columnHeaders': {
      fontFamily: '"Outfit", sans-serif',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    },
    '& .MuiDataGrid-row': {
      backgroundColor: '#FFFFFF',
      fontFamily: '"Outfit", sans-serif',
    },
    '& .MuiDataGrid-cell': {
      fontFamily: '"Outfit", sans-serif',
      alignItems: 'center',
    },
    '& .MuiTablePagination-root': {
      backgroundColor: '#FFFFFF',
      fontFamily: '"Outfit", sans-serif',
      borderBottomLeftRadius: '5px',
      alignItems: 'center',
      borderBottomRightRadius: '5px',
    },
    '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-select, & .MuiTablePagination-actions': {
      backgroundColor: 'white',
      alignItems: 'center',
      fontFamily: '"Outfit", sans-serif',
    },
    "& .css-1jlz3st":{
      display:"hiden",
      alignItems: 'center',
    },
    '& .css-1asbit7-MuiDataGrid-roo.css-955zky-MuiDataGrid-root .MuiDataGrid-withBorderColor': {
      backgroundColor:"#FFFFFF",
      alignItems: 'center',
    }, 
    "& .css-un20tp-MuiDataGrid-root .MuiDataGrid-withBorderColor":{
      backgroundColor:"#FFFFFF !important",
      alignItems: 'center',
    },
}

export const autoCompleteStyles = {
  '& .MuiFilledInput-root': {
    backgroundColor: 'transparent',
    fontFamily: '"Outfit", sans-serif',
    fontSize:"14px",
    borderRadius:"5px",
    border: '1px solid #999999',
    '&:hover': {
        backgroundColor: 'transparent',
        color: '#4C556B',
        border: '1px solid #999999',
        fontFamily: '"Outfit", sans-serif',
        borderRadius:"5px"
    },
    '&.Mui-focused': {
        backgroundColor: 'transparent',
        color: '#4C556B',
        border: '1px solid #999999',
        borderRadius:"5px",
        fontFamily: '"Outfit", sans-serif',
    },
    '&::before': {
        content: 'none',
        fontFamily: '"Outfit", sans-serif',
    },
    '&::after': {
        border: 'none',
        fontFamily: '"Outfit", sans-serif',
    },
},
'& .MuiFilledInput-input': {
    '&:focus': {
        backgroundColor: 'transparent',
        fontFamily: '"Outfit", sans-serif',
    },
},
'& .MuiInputLabel-root': {
    '&.Mui-focused': {
        color: '#4C556B',
        fontFamily: '"Outfit", sans-serif',
    },
},
}