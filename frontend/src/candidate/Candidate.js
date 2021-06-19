import React,{useEffect,useState} from 'react';
import axios from '../axios';
import Card from 'react-bootstrap/Card';

import  {Button}  from '@material-ui/core';
import {Link} from 'react-router-dom';

import './candidate.css';


function Candidate() {
    const [postedjob,setPostedjob]=useState([]);
  const [buttonText, setButtonText] = useState("Apply"); 
    useEffect(()=>{
        axios.get('/get/job').then(response=>{
            setPostedjob(response.data);

    
        
        })
      },[]);
      
      const changeText = (value) => {
          setButtonText("applied")
    }


    return (
        <div className="posted__jobs">
        <h1>jobs posted</h1>
        <div className="map__jobs">
        {postedjob.map((data)=>(
            <Card key={data._id} className="card__jobs">
            <Card.Title>Job Title {data.jobrole}</Card.Title>
            <p>skills nedded {data.salary}</p>
            <p>description {data.description}</p>
            <p>last date to apply {data.lastdate}</p>
            <Link to="/apply" style={{ textDecoration: 'none' }}>
<Button variant="contained"  color="primary">
apply
</Button>
</Link>

       </Card>
        ))}
       </div>
       
             
        </div>
    )
}

export default Candidate
