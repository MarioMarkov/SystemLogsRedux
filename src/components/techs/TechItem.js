import React from 'react'

export const TechItem = ({tech}) => {
    return (
        <li className='collection-item'>
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className='secondary-content'>
                    <i className="material-icons gray-text">delete</i>
                </a>
            </div>
        </li>
    )
}
