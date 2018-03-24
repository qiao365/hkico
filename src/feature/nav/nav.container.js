import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import { service } from '../../manager';

class NavToolContianer extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  componentWillMount() {
    const { cookies, history } = this.props;
    service.tokenSignin({}).then((data) => {
      console.log(data)
      // if(data.result === 'signin') {
      //   history.push("/project/list");
      // }
    })
  };

  render() {
    return (
      /*
      <div className="container" id="nav-container">
        <a className="navbar-brand js-scroll-trigger" href="#home">hk.toolkit</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#/sign/up">SignUp</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#/sign/in">SignIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#/account/profile/2">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#/project/list">Projects</a>
            </li>
          </ul>
        </div>
      </div>
      */
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#" style={{color:"#F05F40"}}>HK.ICO</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">HOME</a></li>
              <li><a href="#/account/profile/2">PROFILE</a></li>
              <li><a href="#/project/list">PROJECTS</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">ABOUT US</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right sign">
              <li><a href="#/sign/up">SIGN UP</a></li>
              <li><a href="#/sign/in">SIGN IN</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withCookies(NavToolContianer);
