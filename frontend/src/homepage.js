import React from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './homepage.css';

function homepage() {
    return (
        <div className="home__page">
        <h1>welcome to the job portal</h1>
        <div className="home__button1">
        <Link to="/recruiter/auth" style={{ textDecoration: 'none' }}>
        <Button variant="contained"  color="primary">
  recruiter login
</Button>
</Link>
</div>
<Link to="/candidate/auth" style={{ textDecoration: 'none' }}>
<Button variant="contained"  color="primary">
candidate login
</Button>
</Link>
        </div>
    )
}

export default homepage
