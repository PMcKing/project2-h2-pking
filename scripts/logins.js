import * as React from 'react';

import { Socket } from './Socket';

export class Loggins extends React.Component {
    constructor(props) {
    super(props);
 
    
   
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    handleSubmit(event) {
        event.preventDefault();

        console.log("can log in");
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