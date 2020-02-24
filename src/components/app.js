import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Login}  from  './Login';
import '../css/button.css';
import '../css/priceColor.css';
import '../css/dashboard.css';
import {Signup} from './Signup';
import {verification} from './EmailVerification'
import '../css/header.css';

export class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <div>
                <Switch>
                        <Route path="/" component={Login}  exact={true}/>
                      
                        <Route path="/signup" component={Signup} exact={true}/>
                        
                        <Route path="/verifyemail" component={Signup} exact={true}/>
                </Switch>
          
            </div>
            
            </BrowserRouter>
            )
    }
}