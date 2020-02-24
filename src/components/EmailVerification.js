import React from 'react';
import {Header} from './Header'

export function verification(){

    return (
        <div>
            <Header/>
           <div className='dashboard'>
                 <br/><br/>

                Verify your mail to login.

                Click here to got to <a href='/'>login page</a>.  

            </div>
        </div>
    )
}