import React,{useEffect} from 'react'
import Searchbar from './components/layout/Searchbar'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import "./App.css"
import {Logs} from './components/logs/Logs'

const  App = () => {

  useEffect(()=>{
    //Initializes Materilize js
    M.AutoInit();
  })

  return (
    <>
     <Searchbar/>
     <div className="container">
       <Logs/>
     </div>
    </>
  );
}

export default App;
