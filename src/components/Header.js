
import React from 'react'
import {Link} from 'react-router-dom'
import '../css/header.css'

export function Header(){
    return(

        <div className='pageHeader'>
            <Link className='header_title' to='/'>
                Zybisys
            </Link>

        </div>
    )
}