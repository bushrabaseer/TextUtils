
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode= () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#4d6b65';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils - Dark"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f2f0e6';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light"
    }
  }
  return (
    <>
  {/* <Router> */}
  <Navbar title="TextUtils"t aboutText="About" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Switch>
          <Route exact path="/about"> 
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          {/* </Route>
        </Switch> */}
</div>
{/* </Router> */}
  </>
  );
}

export default App;
////react does partial mapping so we use exact