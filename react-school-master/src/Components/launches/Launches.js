import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Launches = () =>{
    const [launchesData,setlaunchesData] = useState([]);
       useEffect(()=>{
        axios 
            .get('https://api.spacexdata.com/v4/launches')
            .then((response)=>{
                setlaunchesData(response.data)
            })
          })
    return(
        
      <div className='table'>
         <h2> Launches</h2>
        <table>
        <thead>
                 <tr>
    <th>Name</th>
    <th>Flight number</th>
    <th>Date local</th>
    <th>Détails</th>
  </tr>
  </thead>
  <tbody>
        {launchesData.map((launches,index)=>(
            
            <tr key={index}>
                <td>{launches.name}</td>
                <td>{launches.flight_number}</td>
                <td>{launches.date_local}</td>
                <td>{launches.details}</td>

            </tr>
           
        ))}
        </tbody>
         </table>
      </div>
      
    )
}
export default Launches;