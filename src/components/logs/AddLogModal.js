import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export const AddLogModal = () => {
    const [message,setMessage] = useState('');
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('');
    const onSubmit = ()=>{
        if(message ==='' || tech ===''){
            M.toast({html:'Please fill fields'})
        }else{
            console.log(message,tech,attention)

            setMessage('');
            setTech('')
            setAttention(false);
        }
    };


    return (
        <div id='add-log-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log: </h4>
                <div className='row'>
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={e=>{
                            setMessage(e.target.value)
                        }} />
                        <label htmlFor="message" className='active'>Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" 
                        value={tech} 
                        className='browser-default' 
                        onChange={e=>setTech(e.target.value)}>
                            <option value="" disabled>Select Technitian</option>
                            <option value="John Doe" >John Doe</option>
                            <option value="John Markov" >John Markov</option>
                            <option value="Ivan Ivanov" >Ivan Ivanov</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                        <div className="input-field">
                            <p>
                                <label>
                                    <input type="checkbox" onChange={e => setAttention(!attention)} className='filled-in' checked={attention} value={attention}/>
                                    <span>Needs Attention</span>
                                </label>

                            </p>
                        </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit}  
                className='modal-close waves-effect blue waves-green btn'>Enter</a>
            </div>
        </div>
    )
}


const modalStyle ={
    width:'75%',
    height:'75%'
}