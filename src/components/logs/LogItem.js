import React from 'react'
import Moment from 'react-moment'

export const LogItem = ({log}) => {
    return (
        <li className='collection-item'>
            <div><a href="#edit-log-modal" className={`modal-trigger ${log.attention?'red-text':'blue-text'}`} >
            {log.message}</a>
            <br/>
            <span className='gray-text'>
               <span className="black-text">ID: {log.id}</span> Last updated by   
               <span className='black-text'> {log.tech}</span> on <span>  </span> 
               <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
            </span>
            <a href="#!" className='secondary-content'>
                <i className="material-icons gray-text">delete</i>
            </a>
            </div>
        </li>
    )
}
