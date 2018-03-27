import React, { PureComponent } from 'react';

class LogoutComponent extends PureComponent {

  render() {
    return (
    	<ul className="nav navbar-nav navbar-right sign">
    		<li><a href="#/sign/up">SIGN UP</a></li>
   			<li><a href="#/sign/in">SIGN IN</a></li>
    	</ul>
    );
  }
}

export default LogoutComponent;