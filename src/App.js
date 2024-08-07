
import React,{ useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router ,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  }
    const [alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },900)
    }
  
  return (
    <>
     <Router>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
    
        <Alert alert={alert} />
       
          <Routes>
            <Route exact path="/about" element={<About  mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter,Remove extra Spaces" mode={mode} />} />
          </Routes>
       
      </div>
      </Router>
    </>
  );
}

export default App;
