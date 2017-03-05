import * as React from 'react';

import { Socket } from './Socket';


export class AllUsers extends React.Component {
    constructor(props) {
    super(props);
     this.state = {
            'users': []
        };
 
  }
   componentDidMount() {
        Socket.on('all users',(data) => {
            this.setState({
                'users': data['users']
            });
           console.log(this.state.users)
        })
       
    }
    
    
    render() {
         //console.log(this.state.users)
           
        let all_users = this.state.users.map((n, index) =>
            <li key = {index} >
              <img src={n.picture} />
                {n.name}
              </li>
        
        );
        
        return (
           <div>
           <h4> Connected Users </h4>
           <ul> {all_users} </ul>
           
           </div>
        );
    }
}