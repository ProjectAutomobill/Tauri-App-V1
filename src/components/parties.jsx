import React from 'react';
import { Table } from '@mui/material';
import './parties.css';
import { PartiesTable } from './tables/partiesTable';
import {FiSearch} from 'react-icons/fi';

export const Parties = () => {
  return (
    <div className='parties-items'>
        <div className='upperDiv'>

        </div>

        <div className='lowerBody'>
            <div className='leftDiv'>
                <div className='leftDivbtnSearch'>
                    <FiSearch className='searchIcon'/>
                    <button className='partyBtn'>Add Party</button>

                </div>
                <PartiesTable/>
            </div>

            <div className='rightDiv'>
                <div className='innerRightDiv'>
                    <div className='upperDivRight'>

                    </div>

                    <div className='lowerDivRight'>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
