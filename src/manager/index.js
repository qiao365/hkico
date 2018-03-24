
import * as mock from './mock';
import * as serviceInstance from './service';
import * as utilInstance from './util';

export const remoteGetProjectList = (option) => {
  let projectList = mock.projectItemGenerator(option);
  return projectList;
}

export const remoteGetContractInfo = (option) => {
  let contractList = mock.contractItemGenerator(option);
  return contractList;
}

export const remoteGetContractProgress = (option) => {
  return mock.contractSaleGenorator(option);
}

export const remoteGetContractHolder = (option) => {
  return mock.contractHolderGenorator(option);
}

export const service = serviceInstance;
export const util = utilInstance;

export default {
  service: serviceInstance,
  util: utilInstance
}