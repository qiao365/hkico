import React, { Component } from 'react';
import { HorizontalInputText, Button } from '../../component';
import { service } from '../../manager';

class SignInPage extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  onUserPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  };

  gotoSignUp = () => {
    console.log("go to sign up", this.props);
    const { history } = this.props;
    history.push("up");
  };

  confirmSignIn = () => {
    const { history } = this.props;
    service.signin(this.state).then((data) => {
      // console.log(data)
      history.push("/project/list");
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      /*
      <div>
        <div className="title">
        </div>
        <div className="login-form-container">
          <div className="form">
            <HorizontalInputText type="text" label="邮箱" inputValue={email} onchange={this.onEmailChange} />
            <HorizontalInputText type="password" label="密码" inputValue={password} onchange={this.onUserPasswordChange} />
          </div>
          <div className="action-group">
            <Button label="确定" className="btn btn-primary" clickHandle={this.confirmSignIn}/>
            <Button label="注册用户" className="btn btn-secondary" clickHandle={this.gotoSignUp} />
          </div>
        </div>
      </div>
      */
     <div className="container">
       <div className="main col-md-4 col-md-offset-4">
         <h1 className="text-center">Sign in</h1>
         <div className="item">
           <input type="text" name="email" className="form-control" placeholder="email" value={email||''} onChange={this.onEmailChange} />
         </div>
         <div className="item">
           <input type="password" name="password" className="form-control" placeholder="password" value={password||''} onChange={this.onUserPasswordChange} />
         </div>
         <button type="button" className="btn btn-danger" onClick={this.confirmSignIn}>CONTINUE</button>
         <p className="text-center">No account? <i onClick={this.gotoSignUp}>Start here.</i></p>
       </div>
     </div>
    );
  }
}
export default SignInPage;
