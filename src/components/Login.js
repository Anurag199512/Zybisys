import React from 'react';
import {Header} from './Header'

export function Login(){

    return (
        <div>
            <Header/>
           <div className='dashboard'>
                 <br/><br/>

                <form className='loginForm'>
                    <div className="form-group">
                        <label for="userName">Username</label>
                        <input type="email" class="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Enter your email Id"/>
                    </div>
                    <div className="form-group">
                        <label for="pin">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
                    </div>
                
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <br/>
                    <a  className="App-link"  href="/signup"> New User? Sign Up now.</a>
                </form>        
            </div>
        </div>
    )
}