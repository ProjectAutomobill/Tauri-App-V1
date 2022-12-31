import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import { green } from '@mui/material/colors'

export const PartiesTable = () => {
  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:600}}>Party</TableCell>
                    <TableCell sx={{fontWeight:600}}>Amount</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dataTable.map((row) =>(
                        <TableRow>
                            <TableCell sx={{fontSize: 12}}>{row.Party}</TableCell>
                            <TableCell sx={{fontSize: 12, color: 'green', fontWeight: 600}}>{row.Amount}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}


const dataTable = [{
    "Party": "Wordify",
    "Amount": "$54098.20"
  }, {
    "Party": "Chatterbridge",
    "Amount": "$39894.44"
  }, {
    "Party": "Gigashots",
    "Amount": "$70437.93"
  }, {
    "Party": "Einti",
    "Amount": "$72378.86"
  }, {
    "Party": "Meevee",
    "Amount": "$48433.43"
  }, {
    "Party": "Geba",
    "Amount": "$16087.96"
  }]