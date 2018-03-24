import React, { Component } from 'react';
import { HorizontalInputText, Button } from '../../component';
import { service } from '../../manager';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onUserPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onUserConfirmPasswordChange = (event) => {
    this.setState({
      confirmPassword: event.target.value
    })
  }

  gotoSignIn = () => {
    const { history } = this.props;
    history.push('in');
  }

  confirmSignUp = () => {
    const { history } = this.props;
    service.signup(this.state).then((data) => {
      history.push("/project/list");
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { email = "", password = "", confirmPassword = "" } = this.state;
    return (
      /*
      <div>
        <div className="title">
        </div>
        <div className="login-form-container">
          <div className="form">
            <HorizontalInputText type="text" label="用户名" inputValue={username} onchange={this.onUsernameChange} />
            <HorizontalInputText type="email" label="邮箱" inputValue={email} onchange={this.onEmailChange} />
            <HorizontalInputText type="password" label="密码" inputValue={password} onchange={this.onUserPasswordChange} />
            <HorizontalInputText type="password" label="重复密码" inputValue={confirmPassword} onchange={this.onUserConfirmPasswordChange} />
          </div>
          <div className="action-group">
            <Button label="确定" className="btn btn-primary" clickHandle={this.confirmSignUp}/>
            <Button label="已有用户" className="btn btn-secondary" clickHandle={this.gotoSignIn} />
          </div>
        </div>
      </div>
      */
     <div className="container">
       <div className="main col-md-4 col-md-offset-4 firstTip">
         <h1 className="text-center">Sign up</h1>
         <div className="item">
           <input type="text" name="email" className="form-control" placeholder="email" value={email||''} onChange={this.onEmailChange} />
         </div>
         <div className="item">
           <input type="password" name="password" className="form-control" placeholder="password" value={password||''} onChange={this.onUserPasswordChange} />
         </div>
         <div className="item">
           <input type="password" name="confirmPassword" className="form-control" placeholder="Re-enter password" value={confirmPassword||''} onChange={this.onUserConfirmPasswordChange} />
         </div>
         <button type="button" className="btn Fbtn btn-danger" onClick={this.confirmSignUp}>CONTINUE</button>
         <p className="text-center">Already have an account? <i onClick={this.gotoSignIn}>Start here.</i></p>
       </div>
     </div>
    )
  }
}

export default SignUpPage;
