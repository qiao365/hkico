import React, { Component } from 'react';
import { Page, FormInfo } from '../../component';

class ContractHolderPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { contract } = this.state;
    return (
      <Page>
        <div className="login-form-container">
          <div className="form">
            <FormInfo label="合约名称" inputValue={contract.name} />
            <FormInfo label="合约地址" inputValue={contract.address} />
            <FormInfo label="owner" inputValue={contract.owner} />
            <FormInfo label="持有情况" inputValue={contract.progress} />
            <FormInfo label="地址列表" inputValue={contract.list} />
          </div>
        </div>
      </Page>
    );
  }
};

export default ContractHolderPage;