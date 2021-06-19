import React, { useState ,useEffect} from 'react';
import { Card } from '@material-ui/core';
import axios from '../axios';
import './Appliedlist.css';

function Appliedlist() {
const [apply,setApply]=useState([])
    useEffect(()=>{
       axios.get('/get/apply').then(response=>{
            setApply(response.data);
  
          console.log(response.data);
        
        })
      },[])
  
  

    return (
        <div className="appliedlist_name">
        <h3>candidates who appllied for the job</h3>
           {apply.map((data)=>(
               <Card>
            <p>{data.name} has applied with email address {data.email} to the post of {data.jobrole}</p>
            </Card>
           ))}
        </div>
    )
}

export default Appliedlist
