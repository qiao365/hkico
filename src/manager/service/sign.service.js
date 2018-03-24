import * as utils from '../util';

export const tokenSignin = (params) => {
  return fetch(`/hkico/signin`, {
    method:"get",
    // 'Content-Type': "application/x-www-form-urlencoded",
    headers: {
      'Content-Type': "application/x-www-form-urlencoded",
      'Authorization': 'Basic 1bac510a1c0f97754ecd3d254612c71cfecf986c'
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
    return res.json();
  });
};

export const signup = (params) => {
  return fetch(utils.getUrl(`/hkico/signup`, params), {
    method:"post",
    body: JSON.stringify(params)
  }).then((res) => {
    return res.json();
  });
};