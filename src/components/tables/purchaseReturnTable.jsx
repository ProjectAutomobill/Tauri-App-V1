import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import './transactionTable.css';

export const PurchaseReturnTable = () => {
  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell sx={{fontWeight:600}}>DATE</TableCell>
                    <TableCell sx={{fontWeight:600}}>REF NO.</TableCell>
                    <TableCell sx={{fontWeight:600}}>PARTY NAME</TableCell>
                    <TableCell sx={{fontWeight:600}}>CATEGORY</TableCell>
                    <TableCell sx={{fontWeight:600}}>TYPE</TableCell>
                    <TableCell sx={{fontWeight:600}}>TOTAL</TableCell>
                    <TableCell sx={{fontWeight:600}}>RECEIVED/PAID</TableCell>
                    <TableCell sx={{fontWeight:600}}>BALANCE</TableCell>
                    <TableCell sx={{fontWeight:600}}>PRINT</TableCell>




                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dataTable.map((row) =>(
                        <TableRow>
                            <TableCell sx={{fontSize: 12}}>{row.DATE}</TableCell>
                            <TableCell sx={{fontSize: 12}}>{row.REF_NO}</TableCell>
                            <TableCell sx={{fontSize: 12}}>{row.PARTY_NAME}</TableCell>
                            <TableCell sx={{fontSize: 12}}>{row.CATEGORY}</TableCell>
                            <TableCell sx={{fontSize: 12}}>{row.TYPE}</TableCell>
                            <TableCell sx={{fontSize: 12}}>{row.TOTAL}</TableCell>
                            <TableCell sx={{fontSize: 12}}>{row.RECEIVED}</TableCell>
                            <TableCell sx={{fontSize: 12}}>{row.BALANCE}</TableCell>
                            <TableCell sx={{fontSize: 12, color: 'black', fontWeight: 100}}>{row.PRINT}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}


const dataTable = [{
    "DATE": "4/26/2022",
    "REF_NO": 6,
    "PARTY_NAME": "Maximilian Georgel",
    "CATEGORY": "Fire Protection",
    "TYPE": "Sale",
    "TOTAL": 93,
    "RECEIVED": 5,
    "BALANCE": 95,
    "PRINT": "application/excel"
  }, {
    "DATE": "4/18/2022",
    "REF_NO": 7,
    "PARTY_NAME": "Darcy Kildea",
    "CATEGORY": "Curb & Gutter",
    "TYPE": "Sale",
    "TOTAL": 27,
    "RECEIVED": 13,
    "BALANCE": 38,
    "PRINT": "audio/mpeg3"
  }, {
    "DATE": "5/3/2022",
    "REF_NO": 8,
    "PARTY_NAME": "Dorian Drayson",
    "CATEGORY": "Marlite Panels (FED)",
    "TYPE": "Sale",
    "TOTAL": 1,
    "RECEIVED": 17,
    "BALANCE": 3,
    "PRINT": "video/x-msvideo"
  }, {
    "DATE": "11/11/2022",
    "REF_NO": 9,
    "PARTY_NAME": "Emylee Crummie",
    "CATEGORY": "Roofing (Asphalt)",
    "TYPE": "Sale",
    "TOTAL": 73,
    "RECEIVED": 67,
    "BALANCE": 23,
    "PRINT": "video/x-msvideo"
  }, {
    "DATE": "1/10/2023",
    "REF_NO": 10,
    "PARTY_NAME": "Karna Wesley",
    "CATEGORY": "Marlite Panels (FED)",
    "TYPE": "Sale",
    "TOTAL": 85,
    "RECEIVED": 66,
    "BALANCE": 33,
    "PRINT": "video/msvideo"
  }, {
    "DATE": "3/3/2022",
    "REF_NO": 11,
    "PARTY_NAME": "Edgard Lawrie",
    "CATEGORY": "Overhead Doors",
    "TYPE": "Sale",
    "TOTAL": 30,
    "RECEIVED": 13,
    "BALANCE": 72,
    "PRINT": "application/x-msexcel"
  }, {
    "DATE": "10/17/2022",
    "REF_NO": 12,
    "PARTY_NAME": "Elizabeth Selborne",
    "CATEGORY": "Framing (Steel)",
    "TYPE": "Sale",
    "TOTAL": 83,
    "RECEIVED": 12,
    "BALANCE": 87,
    "PRINT": "application/x-troff-msvideo"
  }, {
    "DATE": "2/7/2022",
    "REF_NO": 13,
    "PARTY_NAME": "Berty Hearnshaw",
    "CATEGORY": "Doors, Frames & Hardware",
    "TYPE": "Sale",
    "TOTAL": 39,
    "RECEIVED": 22,
    "BALANCE": 97,
    "PRINT": "video/avi"
  }, {
    "DATE": "10/7/2022",
    "REF_NO": 24,
    "PARTY_NAME": "Juliane Bullard",
    "CATEGORY": "Painting & Vinyl Wall Covering",
    "TYPE": "Sale",
    "TOTAL": 50,
    "RECEIVED": 13,
    "BALANCE": 69,
    "PRINT": "application/pdf"
  }, {
    "DATE": "10/2/2022",
    "REF_NO": 25,
    "PARTY_NAME": "Sallie Childers",
    "CATEGORY": "EIFS",
    "TYPE": "Sale",
    "TOTAL": 60,
    "RECEIVED": 72,
    "BALANCE": 93,
    "PRINT": "image/jpeg"
  }, {
    "DATE": "11/2/2022",
    "REF_NO": 26,
    "PARTY_NAME": "Jan Culshaw",
    "CATEGORY": "Epoxy Flooring",
    "TYPE": "Sale",
    "TOTAL": 60,
    "RECEIVED": 69,
    "BALANCE": 52,
    "PRINT": "audio/mpeg3"
  }, {
    "DATE": "3/14/2022",
    "REF_NO": 27,
    "PARTY_NAME": "Sibylla Rocks",
    "CATEGORY": "Roofing (Metal)",
    "TYPE": "Sale",
    "TOTAL": 4,
    "RECEIVED": 27,
    "BALANCE": 4,
    "PRINT": "video/quicktime"
  }, {
    "DATE": "7/7/2022",
    "REF_NO": 28,
    "PARTY_NAME": "Gaylor Denziloe",
    "CATEGORY": "Exterior Signage",
    "TYPE": "Sale",
    "TOTAL": 79,
    "RECEIVED": 27,
    "BALANCE": 43,
    "PRINT": "video/quicktime"
  }, {
    "DATE": "6/22/2022",
    "REF_NO": 29,
    "PARTY_NAME": "Randolph Castellucci",
    "CATEGORY": "Drywall & Acoustical (MOB)",
    "TYPE": "Sale",
    "TOTAL": 27,
    "RECEIVED": 34,
    "BALANCE": 39,
    "PRINT": "image/gif"
  }, {
    "DATE": "5/9/2022",
    "REF_NO": 30,
    "PARTY_NAME": "Gerrilee Spacey",
    "CATEGORY": "Roofing (Asphalt)",
    "TYPE": "Sale",
    "TOTAL": 53,
    "RECEIVED": 40,
    "BALANCE": 63,
    "PRINT": "video/mpeg"
  }, {
    "DATE": "10/31/2022",
    "REF_NO": 31,
    "PARTY_NAME": "Genovera Keay",
    "CATEGORY": "Curb & Gutter",
    "TYPE": "Sale",
    "TOTAL": 67,
    "RECEIVED": 14,
    "BALANCE": 57,
    "PRINT": "video/x-mpeg"
  }, {
    "DATE": "12/30/2022",
    "REF_NO": 32,
    "PARTY_NAME": "Sutherlan Geharke",
    "CATEGORY": "Prefabricated Aluminum Metal Canopies",
    "TYPE": "Sale",
    "TOTAL": 19,
    "RECEIVED": 63,
    "BALANCE": 59,
    "PRINT": "image/png"
  }, {
    "DATE": "8/4/2022",
    "REF_NO": 33,
    "PARTY_NAME": "Raddie Tate",
    "CATEGORY": "Glass & Glazing",
    "TYPE": "Sale",
    "TOTAL": 61,
    "RECEIVED": 66,
    "BALANCE": 67,
    "PRINT": "application/x-troff-msvideo"
  }, {
    "DATE": "5/9/2022",
    "REF_NO": 34,
    "PARTY_NAME": "Traci Janeczek",
    "CATEGORY": "Glass & Glazing",
    "TYPE": "Sale",
    "TOTAL": 29,
    "RECEIVED": 10,
    "BALANCE": 29,
    "PRINT": "application/pdf"
  }, {
    "DATE": "3/9/2022",
    "REF_NO": 35,
    "PARTY_NAME": "Derk Orts",
    "CATEGORY": "Ornamental Railings",
    "TYPE": "Sale",
    "TOTAL": 28,
    "RECEIVED": 29,
    "BALANCE": 87,
    "PRINT": "audio/mpeg3"
  }, {
    "DATE": "5/11/2022",
    "REF_NO": 36,
    "PARTY_NAME": "Nehemiah Carnachen",
    "CATEGORY": "Doors, Frames & Hardware",
    "TYPE": "Sale",
    "TOTAL": 6,
    "RECEIVED": 72,
    "BALANCE": 37,
    "PRINT": "application/x-excel"
  }, {
    "DATE": "12/13/2022",
    "REF_NO": 37,
    "PARTY_NAME": "Jermaine Eldrett",
    "CATEGORY": "Asphalt Paving",
    "TYPE": "Sale",
    "TOTAL": 88,
    "RECEIVED": 36,
    "BALANCE": 60,
    "PRINT": "application/msword"
  }, {
    "DATE": "3/13/2022",
    "REF_NO": 38,
    "PARTY_NAME": "Ynes Fittis",
    "CATEGORY": "Soft Flooring and Base",
    "TYPE": "Sale",
    "TOTAL": 38,
    "RECEIVED": 19,
    "BALANCE": 79,
    "PRINT": "video/quicktime"
  }, {
    "DATE": "7/21/2022",
    "REF_NO": 39,
    "PARTY_NAME": "Pierette Frentz",
    "CATEGORY": "Overhead Doors",
    "TYPE": "Sale",
    "TOTAL": 97,
    "RECEIVED": 18,
    "BALANCE": 67,
    "PRINT": "application/powerpoint"
  }, {
    "DATE": "9/3/2022",
    "REF_NO": 40,
    "PARTY_NAME": "Dredi MacCague",
    "CATEGORY": "Fire Sprinkler System",
    "TYPE": "Sale",
    "TOTAL": 77,
    "RECEIVED": 28,
    "BALANCE": 42,
    "PRINT": "application/x-troff-msvideo"
  }, {
    "DATE": "5/28/2022",
    "REF_NO": 41,
    "PARTY_NAME": "Cedric Rawlinson",
    "CATEGORY": "Fire Protection",
    "TYPE": "Sale",
    "TOTAL": 38,
    "RECEIVED": 77,
    "BALANCE": 70,
    "PRINT": "application/x-mspowerpoint"
  },{
    "DATE": "11/29/2022",
    "REF_NO": 46,
    "PARTY_NAME": "Rhys Vint",
    "CATEGORY": "Curb & Gutter",
    "TYPE": "Sale",
    "TOTAL": 53,
    "RECEIVED": 51,
    "BALANCE": 37,
    "PRINT": "video/mpeg"
  }, {
    "DATE": "1/22/2022",
    "REF_NO": 47,
    "PARTY_NAME": "Ellwood Glendenning",
    "CATEGORY": "Soft Flooring and Base",
    "TYPE": "Sale",
    "TOTAL": 12,
    "RECEIVED": 4,
    "BALANCE": 26,
    "PRINT": "application/x-excel"
  }, {
    "DATE": "7/24/2022",
    "REF_NO": 48,
    "PARTY_NAME": "Jonah Pourveer",
    "CATEGORY": "Site Furnishings",
    "TYPE": "Sale",
    "TOTAL": 25,
    "RECEIVED": 20,
    "BALANCE": 68,
    "PRINT": "application/vnd.ms-powerpoint"
  }, {
    "DATE": "10/17/2022",
    "REF_NO": 49,
    "PARTY_NAME": "Karol Dorow",
    "CATEGORY": "Drywall & Acoustical (MOB)",
    "TYPE": "Sale",
    "TOTAL": 81,
    "RECEIVED": 55,
    "BALANCE": 35,
    "PRINT": "video/x-msvideo"
  }, {
    "DATE": "10/25/2022",
    "REF_NO": 50,
    "PARTY_NAME": "Reinhard Paullin",
    "CATEGORY": "Prefabricated Aluminum Metal Canopies",
    "TYPE": "Sale",
    "TOTAL": 63,
    "RECEIVED": 52,
    "BALANCE": 39,
    "PRINT": "video/mpeg"
  }]
  
  
  