import React from 'react'

export const LogItem = ({log}) => {
    return (
        <li className='collection-item'>
            <div><a href="">{log.message}</a></div>
        </li>
    )
}
