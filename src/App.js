import React,{useEffect} from 'react'
import Searchbar from './components/layout/Searchbar'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import "./App.css"
import {Logs} from './components/logs/Logs'
import {AddBtn} from './components/layout/AddBtn'
import {AddLogModal} from './components/logs/AddLogModal'
import {EditLogModal} from './components/logs/EditLogModal'



const  App = () => {

  useEffect(()=>{
    //Initializes Materilize js
    M.AutoInit();
  })

  return (
    <>
     <Searchbar/>
     <div className="container">
       <AddBtn/>
       <AddLogModal/>
       <EditLogModal/>

       <Logs/>
     </div>
    </>
  );
}

export default App;
