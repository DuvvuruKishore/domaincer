import React from 'react';
import './App.css';
import Recruiter from './recruiter/Recruiter'
import Candidate from './candidate/Candidate';
import { BrowserRouter, Route, Switch,Link } from "react-router-dom";
 import SignIn from './auth/SignIn';
 import Candidatelogin from './auth/Candidatelogin';
import Homepage from './homepage';
import Apply from './candidate/Apply';
import Appliedlist from './recruiter/Appliedlist';

function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
<Switch>
<Route path="/" exact component={Homepage}/>

<Route path="/recritment" exact component={Recruiter}/>
 <Route path="/Colleges" exact component={Candidate}/>
<Route path='/recruiter/auth' exact  component={SignIn}/>
<Route path='/candidate/auth' exact component={Candidatelogin}/>
<Route path='/apply' exact component={Apply}/>
<Route path='/applied' exact  component={Appliedlist}/>

 </Switch>
</BrowserRouter>

    </div>
  );
}

export default App;
