import * as React from 'react';

import { Socket } from './Socket';

export class Loggins extends React.Component {
    constructor(props) {
    super(props);
 
    
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    handleSubmit(event) {
        event.preventDefault();
        
         FB.getLoginStatus((response) => {
             if (response.status == 'connected') {
                 console.log("in");
                 Socket.emit('new user', {
                     'facebook_user_token':
                        response.authResponse.accessToken,
                     'LoggedIn': true
                 });
             }
             else{
                 console.log("out");
             }
         });

       
    }
    handleChange(event) {
    this.setState({value: event.target.value});
     }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                 <button>Enter chat room</button>
            </form>
        );
    }
}