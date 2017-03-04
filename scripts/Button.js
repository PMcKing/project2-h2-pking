import * as React from 'react';

import { Socket } from './Socket';

export class Button extends React.Component {
    constructor(props) {
    super(props);
    this.state = {message: 'enter message'};//what the user types, their username, and profilepic
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    handleSubmit(event) {
        event.preventDefault();

         let message = this.state.value;


        let random = Math.floor(Math.random() * 100);
        console.log('Generated a random number: ', random);
        FB.getLoginStatus((response) => {
             if (response.status == 'connected') {
                 Socket.emit('new number', {
                     'facebook_user_token':
                        response.authResponse.accessToken,
                     'number': message,
                 });
             }
         });
       
    }
    handleChange(event) {
    this.setState({value: event.target.value});
     }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <input type = "text" value={this.state.message}  onChange={this.handleChange} />
                    <button>Send message</button>
            </form>
        );
    }
}
