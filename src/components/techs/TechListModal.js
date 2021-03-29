import React,{useState,useEffect} from 'react'
import {TechItem} from '../techs/TechItem'


export const TechListModal = () => {
    const [techs,setTechs] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        getTechs()
        //es-lint-disable-next-line
    },[])

    const getTechs = async ()=>{
        setLoading(true);
        //dont type the whole url because of the prxy in package.json
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    }
    

    return (
        <div id="tech-list-modal" className='modal'>
            <div className="modal-content">
                <h4>Technitian List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech=>(
                        <TechItem tech={tech} key={tech.id}/>
                    ))}
                </ul>
            </div>

        </div>
    )
}
