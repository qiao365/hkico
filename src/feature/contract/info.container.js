import React, { Component } from 'react';
import { FormInfo, Page, Button } from '../../component';
import { service } from '../../manager';

class ContractInfoPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const contractIdOfParam = this.props.match.params.contractId;
    const { contractId } = this.state;
    service.remoteGetProjectList({xx:1, yy:3}).then((res)=>{
      console.log('will mount', res);
      this.setState({
        contract: res
      });
    })
  }

  onButtonClick = () => {
    const { history } = this.props;
    const { contractId } = this.state;
    history.push(`/contract/progress/${contractId || 0}`);
  }

  render() {
    const { contract={} } = this.state;
    console.log(contract);
    return (
      <Page>
        <div className="login-form-container">
          <div className="form">
            <FormInfo label="地址" inputValue={contract.address} />
            <FormInfo label="合约名称" inputValue={contract.name} />
            <FormInfo label="简称" inputValue={contract.short} />
            <FormInfo label="owner" inputValue={contract.owner} />
            <FormInfo label="总量" inputValue={contract.total} />
            <FormInfo label="精度" inputValue={contract.decimal} />
            <FormInfo label="价格" inputValue={contract.price} />
            <FormInfo label="截止日期" inputValue={contract.deadline} />
            <FormInfo label="成功目标" inputValue={contract.target} />
            <FormInfo label="提前结束目标" inputValue={contract.success} />
            <FormInfo label="状态" inputValue={contract.status} />
          </div>
          <Button label="查看进度" clickHandle={this.onButtonClick} />
        </div>
      </Page>
    )
  }
}

export default ContractInfoPage;
