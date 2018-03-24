
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
export const calcGuid = () => {
  return [s4(), s4(), '-', s4(), '-', s4(), '-', s4(), s4(), s4()].join('');
}

export const getUrl = (urlBase, params) => {
  return `${urlBase}?${Object.keys(params).map((key)=> {
    return [key, encodeURIComponent(params[key])].join('=')
  }).join('&')}`;
}

export const getParams = (params) => {
  return `${Object.keys(params).map((key)=> {
    return [key, encodeURIComponent(params[key])].join('=')
  }).join('&')}`;
}