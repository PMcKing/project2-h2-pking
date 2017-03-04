import * as React from 'react';

import { Button } from './Button';
import { Socket } from './Socket';
import { FBlogin } from './FBLogin';

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'numbers': []
        };
    }

    componentDidMount() {
        Socket.on('all messages', (data) => {
            this.setState({
                'numbers': data['numbers']
            });
        })
    }

    render() {
        let numbers = this.state.numbers.map((n, index) =>
             <li key={index}>
                 <img src={n.picture} />
                 {n.name}: {n.number}
             </li>
        );
        return (
            <div>
                <h1 className="heading">Random numbers so far!</h1>
                <FBlogin />
                <Button />
                <ul>{numbers}</ul>
            </div>
        );
    }
}
