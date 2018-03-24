import * as util from '../util';

const projectItem = {
  guid:'',
  name:'',
  progress:''
}


export const projectItemGenerator = (count) => {
  console.log('mock project list', count);
  let xx = new Array(count);
  return xx.fill(JSON.parse(JSON.stringify(projectItem))).map((ele,idx) => {
    let guid = util.calcGuid();
    return {
      guid,
      name: `project-${idx}-${guid}`,
      progress: (Math.random() * 100).toFixed(2) + '%',
      logo: `../img/portfolio/fullsize/${Number.parseInt((Math.random() * 6 +1), 10)}.jpg`,
      desc: `anything desc`,
      status: Number.parseInt((Math.random() * 3), 10)
    };
  });
}

export const contractItemGenerator = (count) => {
  console.log('mock contract list', count);
  let xx = new Array(count);
  return xx.fill(JSON.parse(JSON.stringify(projectItem))).map((ele,idx) => {
    let guid = util.calcGuid();
    return {
      address:`${guid}`,
      name:'预售合约',
      short:'CST',
      owner:`${util.calcGuid()}`,
      total: 1e30,
      decimal: 18,
      price: 10000,
      deadline: new Date((new Date().getTime() + 10 * 86400 * 1000)).toString(),
      target: 100,
      success: 1000,
      status: '进行中'
    };
  });
}

export const contractSaleGenorator = (count) => {
  console.log('mock contract list', count);
  let xx = new Array(count);
  return xx.fill(JSON.parse(JSON.stringify(projectItem))).map((ele,idx) => {
    let guid = util.calcGuid();
    return {
      address:`${guid}`,
      buy: (Math.random() * 100).toFixed(2),
      joinAt: new Date((new Date().getTime() + 10 * 86400 * 1000)).toString(),
      token: 100,
      tx:`${util.calcGuid()}`
    };
  });
}

export const contractHolderGenorator = (count) => {
  console.log('mock contract list', count);
  let xx = new Array(count);
  return xx.fill(JSON.parse(JSON.stringify(projectItem))).map((ele,idx) => {
    let guid = util.calcGuid();
    return {
      address:`${guid}`,
      hold: (Math.random() * 100).toFixed(2)
    };
  });
}
