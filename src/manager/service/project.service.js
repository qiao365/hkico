import * as utils from '../util';

export const remoteGetProjectList = (params) => {
  return fetch(utils.getUrl(`/data/project.info.json`,params)).then((res)=>{
    return res.json();
  });
};

export const remotePostProjectInfo = (params, body) => {
  return fetch(utils.getUrl("/data/project.list.json", params), {
    method:"post",
    body
  }).then((res)=>{
    console.log("service to get remtoe", res);
    return res.json();
  });
};
