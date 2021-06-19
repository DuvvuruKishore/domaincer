import React, { useState } from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import './Apply.css'
import axios from '../axios';
import {Link} from 'react-router-dom';


function Apply() {
    const [email,setEmail]=useState('');
    const [jobrole,setJobrole]=useState('');
    const [name,setName]=useState('');

    const addTodo=(e)=>{
        e.preventDefault();
        
        let taskDetails={
            name:name,
          email:email,
          jobrole:jobrole,
          
        }
       axios.post('/post/apply',taskDetails);
      
    }


    return (
        <div className="apply_eachjob">
        <div className="">
        <Card >
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
        how to apply ?how it works?please enter the form below we will let the recruiter know you are interseted in that job
          </Typography>
          <Typography  color="primary">
            fill the below form
          </Typography>
          </CardContent>
         
         </Card>
        </div>
        <div className="job__form">
        <form >
         <Card className="job__card">
         <div className="email">
         <TextField id="outlined-basic" className="email_text"  label="name" variant="outlined" 
         value={name} onChange={(e)=>setName(e.target.value)}/>
         </div>
         
         <div className="email">
         <TextField id="outlined-basic" className="email_text"  label="email" variant="outlined" 
         value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <div className="email">
         <TextField id="outlined-basic" className="email_text" label="jobrole" variant="outlined" 
         value={jobrole} onChange={(e)=>setJobrole(e.target.value)}/>
         </div>
         <Button  onClick={(e)=>{addTodo(e)}} variant="contained" color="primary">
         apply
       </Button>
         </Card>
         </form>
         </div>
         <div className="apply__submit">
         <h5>once you click on the apply, it will be submitted</h5>
         </div>
         <Link to="/Colleges" style={{ textDecoration: 'none' }}>
<Button variant="contained"  color="primary">
back
</Button>
</Link>

        </div>
    )
}

export default Apply
