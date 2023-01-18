import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import { green } from '@mui/material/colors'
import { getPartyDetails } from '../../api-firebase/firebase'

var x = [];
var dataTable1 = getPartyDetails().then((val) => {
  x = val;
});
// console.log("PartiesTable : ");
// console.log(x);
// console.log("Format : ");

export const PartiesTable = () => {

  // console.log(dataTable);
  // console.log(dataTable1);  

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
                    x.map((row) =>(
                    // dataTable1.array.forEach(element => {
                      
                    
                        <TableRow>
                            <TableCell sx={{fontSize: 12}}>{row.Total}</TableCell>
                            <TableCell sx={{fontSize: 12, color: 'green', fontWeight: 600}}>{row.Balance}</TableCell>
                        </TableRow>
                    ))
                  // })
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
  console.log(dataTable);