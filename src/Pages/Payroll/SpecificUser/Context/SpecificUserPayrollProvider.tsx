import React, { useState } from 'react'
import { PayrollContextSpecific, PayrollRowSpecifc } from '../interface'
import { usePayrollUserId } from '../../Hook'

export const PayrollProviderSpecific: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {
    const [month, setMonth] = useState<number | undefined>(undefined)
    const [year, setYear] = useState<number | undefined>(undefined)

    const { data: payrollId = [] } = usePayrollUserId(month, year)

    const rows: PayrollRowSpecifc[] = payrollId.map((payrollData, index) => ({
        id: index + 1,
        originalId: payrollData.userId._id,
        netSalary: `${payrollData.netSalary}${payrollData.currency}`,
        healthInsurance: `${payrollData.healthInsurance}${payrollData.currency}`,
        month: payrollData.month,
        workingDays: payrollData.workingDays,
        socialSecurity: payrollData.socialSecurity,
        fullName: `${payrollData.userId.firstName} ${payrollData.userId.lastName}`,
        grossSalary: payrollData.grossSalary,
        year: payrollData.year,
        bonusDescription: payrollData.bonusDescription,
        currency: payrollData.currency,
        bonus: payrollData.bonus,
        userId: payrollData.userId._id,
    }))

    const columns = [
        { field: 'id', headerName: 'No', flex: 0.5 },
        { field: 'fullName', headerName: 'Full Name', flex: 1.7 },
        { field: 'netSalary', headerName: 'netSalary', flex: 1.7 },
        { field: 'healthInsurance', headerName: 'healthInsurance', flex: 1.7 },
        { field: 'month', headerName: 'month', flex: 1 },
        { field: 'workingDays', headerName: 'workingDays', flex: 1.5 },
        { field: 'socialSecurity', headerName: 'socialSecurity', flex: 1.5 },
        { field: 'grossSalary', headerName: 'grossSalary', flex: 1 },
        { field: 'year', headerName: 'year', flex: 1.5 },
        { field: 'bonusDescription', headerName: 'bonusDescription', flex: 2 },
    ]

    const headerTextColors = { firstName: '#0000FF' }

    const getRowId = (row: PayrollRowSpecifc) => row.id

    const contextValue = {
        rows,
        columns,
        headerTextColors,
        getRowId,
        setMonth,
        setYear,
        fullName: `${payrollId[0]?.userId.firstName} ${payrollId[0]?.userId.lastName}`,
    }

    return (
        <PayrollContextSpecific.Provider value={contextValue}>
            {children}
        </PayrollContextSpecific.Provider>
    )
}