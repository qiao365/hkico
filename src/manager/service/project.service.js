import * as utils from '../util';

export const newProject = (params) => {
  // let formData = new FormData();
  // for(let key in params) {
  // 	formData.append(key, params[key])
  // }
  return fetch(`/hkico/project/applyProject`, {
    method:"post",
    // 'Content-Type': "application/x-www-form-urlencoded",
    headers: {
      'Content-Type': "application/x-www-form-urlencoded"
    },
    body: utils.getParams(params)
  }).then((res)=>{
    return res.json();
  });
};

export const findProjectInfo = (projectId) => {
  return fetch(`/hkico/project/findProjectById`, {
    method:"post",
    headers: {
      'Content-Type': "application/x-www-form-urlencoded"
    },
    body: utils.getParams({projectId: projectId})
  }).then((res)=>{
    return res.json();
  });
};

export const findProjects = (limit) => {
  return fetch(`/hkico/project/findProjects`, {
    method:"post",
    headers: {
      'Content-Type': "application/x-www-form-urlencoded"
    },
    body: utils.getParams({limit: limit || 10})
  }).then((res)=>{
    return res.json();
  });
};

export const remoteGetProjectList = (params) => {
  return fetch(utils.getUrl(`/data/project.info.json`,params)).then((res)=>{
    return res.json();
  });
};

export const remotePostProjectInfo = (params, body) => {
  return fetch(utils.getUrl("/data/project.list.json", params), {
    method:"post"
  }).then((res)=>{
    console.log("service to get remtoe", res);
    return res.json();
  });
};
