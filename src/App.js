import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='dark';
      showAlert("dark mode has been able","success");
  }
  else{
      setmode('light');
      document.body.style.backgroundColor= 'light';
      showAlert("light mode has been able","success"); 
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="contanier my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
             <TextForm showAlert={showAlert}heading="Enter your Text to analyze "/>
          </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}
export default App;
