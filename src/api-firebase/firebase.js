import { db } from "./firebase-config";
import {collection, addDoc, getDoc, getDocs} from 'firebase/firestore';
import { async } from "@firebase/util";


export async function getPartyDetails()
{
    const tableData = new Array();
    console.log("Getting Party Details...");
    var users = collection(db, 'users');
    const usersData = await getDocs(users);
    usersData.forEach(async doc => { 
        // console.log(doc.data()); 
        var company = collection(db, 'users',doc.id.toString(),'company');
        const companyDetails = await getDocs(company);
        
        companyDetails.forEach(async doc1 => {
            // console.log(doc1.data()); 
            var party = collection(db, 'users',doc.id.toString(),'company',doc1.id.toString(),'parties');
            const parties = await getDocs(party);

            parties.forEach(async doc3 => { 
                // console.log(doc2.data());
                // console.log(doc2.data().Balance)
                var partiesDetails = collection(db, 'users',doc.id.toString(),'company',doc1.id.toString(),'parties',doc3.id.toString(),'PartyDetails');
                const partyDetailsData = await getDocs(partiesDetails);

                partyDetailsData.forEach(async doc4 => {

                
                    var jsonData = {
                        'Balance' : doc4.data().Balance,
                        'Date' : doc4.data().Date,
                        'Number' : doc4.data().Number,
                        'Total' : doc4.data().Total,
                        'Type' : doc4.data().Type
                    }
                    // console.log(jsonData);
                    // jsonData = JSON.parse(JSON.stringify(jsonData));
                    tableData.push(jsonData);
            })
            })
        })
    })

    console.log("firebase : ");
    // var tableData1 = JSON.parse(JSON.stringify(tableData));
    console.log(tableData);
    return tableData;  
    // var usersData1 = JSON.stringify(usersData);
    // usersData1 = JSON.parse(usersData1);
    // usersData1.forEach(doc => {
    //     console.log(doc.data());
    // })
    // console.log(usersData1);
}
