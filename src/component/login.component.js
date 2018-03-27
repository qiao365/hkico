import React, { PureComponent } from 'react';
import { service } from '../manager';

class LoginComponent extends PureComponent {

  logout = (event) => {
    service.logout().then((data) => {
      console.log(data);
    });
  }

  render() {
    let { member } = this.state;
    return (
      <ul class="nav navbar-nav navbar-right sign">
        <li><a href="#">{member.email}</a></li>
        <li><a href="javascript:;" onClick={this.logout}>LOGOUT</a></li>
      </ul>
    );
  }
}

export default LoginComponent;