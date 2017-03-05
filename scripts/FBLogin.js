import * as React from 'react';

export class FBlogin extends React.Component{
    
    
     render() {
        return (
            <div
                 className="fb-login-button"
                 data-max-rows="1"
                 data-size="medium"
                 data-show-faces="false"
                 data-auto-logout-link="true">
            </div>
        );
    }
}

