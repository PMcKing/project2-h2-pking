import * as React from 'react';

import { Socket } from './Socket';

export class Button extends React.Component {
    handleSubmit(event) {
        event.preventDefault();

        let random = Math.floor(Math.random() * 100);
        console.log('Generated a random number: ', random);
        FB.getLoginStatus((response) => {
             if (response.status == 'connected') {
                 Socket.emit('new number', {
                     'facebook_user_token':
                        response.authResponse.accessToken,
                     'number': random,
                 });
             }
         });
       
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>Send up a random number!</button>
            </form>
        );
    }
}
