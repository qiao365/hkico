
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

export const getCookie = (name) => {
  //用处理字符串的方式查找到key对应value
  var name = escape(name);
  //读cookie属性，这将返回文档的所有cookie
  var allcookies = document.cookie;
  //查找名为name的cookie的开始位置
  name += "=";
  var pos = allcookies.indexOf(name);
  //如果找到了具有该名字的cookie，那么提取并使用它的值
  if (pos != -1) { //如果pos值为-1则说明搜索"version="失败
    var start = pos + name.length; //cookie值开始的位置
    var end = allcookies.indexOf(";", start); //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
    if (end == -1) end = allcookies.length; //如果end值为-1说明cookie列表里只有一个cookie
    var value = allcookies.substring(start, end); //提取cookie的值
    value = decodeURI(value); //对它解码
    return (value);
  } else { //搜索失败，返回空字符串
    return "";
  }
}

export const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  var cookie = cname + "=" + encodeURI(cvalue) + ";path=/;";
  if(exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    cookie += expires;
  }
  document.cookie = cookie;
}

export const removeCookie = (cname) => {
    setCookie(cname, '', -1);
}