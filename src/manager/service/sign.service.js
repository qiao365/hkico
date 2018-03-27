import * as utils from '../util';

export const tokenSignin = (params) => {
  let auth = utils.getCookie('auth');
  if(!auth) {
    return Promise.resolve({result: 'not'});
  }
  let email = utils.getCookie('email');
  return fetch(utils.getUrl(`/hkico/signin`, {email: email}), {
    method:"get",
    // 'Content-Type': "application/x-www-form-urlencoded",
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
      'Authorization': 'Basic ' + auth
    }
  }).then((res) => {
    return res.json();
  });
};

export const signin = (params) => {
  params.grant_type = 'password';
  params.username = params.email;
  return fetch(`/hkico/signin`, {
    method:"post",
    // 'Content-Type': "application/x-www-form-urlencoded",
    headers: {
      'Content-Type': "application/x-www-form-urlencoded"
    },
    body: utils.getParams(params)
  }).then((res) => {
    return res.json().then((data) => {
      let email = data.member.email;
      let auth = data.token;
      utils.setCookie('email', email);
      utils.setCookie('auth', auth);
      return data;
    });
  });
};

export const signup = (params) => {
  return fetch(`/hkico/signup`, {
    method:"post",
    body: JSON.stringify(params)
  }).then((res) => {
    return res.json();
  });
};

export const logout = () => {
  let email = utils.getCookie('email');
  return fetch(utils.getUrl(`/hkico/signup`, {email: email})).then((res) => {
    utils.removeCookie('email');
    utils.removeCookie('auth');
    return res.json();
  });
};