
import React, { useState ,useEffect} from 'react'
import axios from '../axios';
import './Recruiter.css';
import { TextField } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';


function Recruiter() {

    const [jobrole,setJobrole]=useState('');
    const [skills,setSkills]=useState('');
    const [salary,setSalary]=useState('');
    const [description,setDescription]=useState('');
    const [lastdate,setLastdate]=useState('');
    

    const addTodo=(e)=>{
        e.preventDefault();
        
        let taskDetails={
            jobrole:jobrole,
            skills:skills,
            salary:salary,
            description:description,
            lastdate:lastdate,
        }
        console.log(taskDetails);
        axios.post('/post/job',taskDetails);
        
    }
    const reset=(e)=>{
        e.preventDefault();
        setJobrole('');
        setSkills('');
        setSalary('');
        setDescription('');
        setLastdate('');
        
    }

  

    return (
      <div >
      <div className="persons__job">
      <Link to="/applied" style={{ textDecoration: 'none' }}>
<Button variant="contained"  color="primary">
view applied list
</Button>
</Link>
</div>

        <div className="post__job">
        <h2>post a requirment</h2>
        <h6>once we click on post job the candidates can view the job</h6>
        <form>
        <div className="card card__change">
        <div className="form-group">
        <input type="text" name="name" placeholder="jobrole" className="form-control border-change jobrole"  value={jobrole} onChange={(e)=>{setJobrole(e.target.value)}}/>
        </div>

      
      <div className="form-group">
      <input type="text" name="name" placeholder="skills" className="form-control border-change" id="name" value={skills} onChange={(e)=>{setSkills(e.target.value)}}/>
      </div>

      <div className="form-group">
      <input type="text" name="name" placeholder="salary" className="form-control border-change jobrole" id="name" value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>
      </div>
     
      <div className="form-group">
      <input type="text" name="name" placeholder="description" className="form-control border-change" id="name" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
      </div>
      <div class="form-group">
      <input type="text" name="name" placeholder="last date to apply" className="form-control border-change jobrole" id="name" value={lastdate} onChange={(e)=>{setLastdate(e.target.value)}}/>
      </div>
      
     {/* <button className="post_button" onClick={(e)=>addTodo(e)}>post a job</button>
    <button className="post_button" onClick={(e)=>reset(e)}>reset</button>*/}
<div className="button__post">
       <Button variant="contained" className="job" onClick={(e)=>addTodo(e)}  color="primary">post a job</Button>
       </div>
       <Button variant="contained" onClick={(e)=>reset(e)}  color="primary">reset</Button>
    
    </div>
  
      </form>
        </div>
       
    
        </div>
    )
}

export default Recruiter
