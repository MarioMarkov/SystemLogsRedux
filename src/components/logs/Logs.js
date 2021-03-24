import React,{useState,useEffect} from 'react'



export const Logs = () => {
    const [logs,setLogs ] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        getLogs()
        //es-lint-disable-next-line
    },[])

    const getLogs = async ()=>{
        setLoading(true);
        //dont type the whole url because of the prxy in package.json
        const res = await fetch('/logs');
        const data = await res.json();
        setLogs(data);
        setLoading(false);
    }
    if(loading){
       return <h4>Loading</h4>
    }

    return (
        <ul className="collection with-header">
          <li className='collection-header'>
            <h4 className='center'>System Logs</h4>
          </li>
          {!loading && logs.length===0 ? <p className='center'>No Logs to show</p> :
              logs.map(log=>
                  <li>{log.message}</li>
              )
            }
        </ul>
    )
}