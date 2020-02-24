import React from 'react';
import {Header} from './Header'
import sendMail from '../utils/sendMail'

export function Signup(props){

    function verifyFields(e){
        e.preventDefault();
        console.log(e.target.elements);
         
    }

    return (
        <div>
            <Header/>   
           <div className='dashboard'>
                 <br/><br/>
            Sign Up Page 

            <form className='loginForm' onSubmit={verifyFields}>
                    <div className="form-group">
                        <label for="userName">Username</label>
                        <input type="email" className="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Enter your email Id"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
                    </div>
                    <div className="form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Enter your password again"/>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div id="errorMessage">
                    
                    </div>
                    <br/>
                    
                </form>

                Click here to got to <a href='/'>login page</a>.  
            </div>
        </div>
    )
}