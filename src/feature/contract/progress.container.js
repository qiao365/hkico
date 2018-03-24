import React, { Component } from 'react';
import { Page, FormInfo } from '../../component';
import { remoteGetContractProgress, remoteGetContractInfo } from '../../manager';

class ContractProgressPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      progressList: remoteGetContractProgress(10),
      contract: remoteGetContractInfo(1)[0]
    })
  }
  render() {
    const { contract = {}, progressList=[] } = this.state;
    return (
      <Page>
        <div className="login-form-container">
          <div className="form">
            <FormInfo label="合约名称" inputValue={contract.name} />
            <FormInfo label="合约地址" inputValue={contract.address} />
            <FormInfo label="owner" inputValue={contract.owner} />
            <FormInfo label="进度" inputValue={contract.progress} />
          </div>
        </div>
        {
          progressList.map((pitem, idx) => {
            return (
              <div key={idx}>
                <span>
                  {pitem.address}
                </span>
                <span>
                  {pitem.buy}
                </span>
                <span>
                  {pitem.joinAt}
                </span>
                <span>
                  {pitem.token}
                </span>
                <span>
                  {pitem.tx}
                </span>
              </div>
            );
          })
        }
      </Page>
    );
  }
};

export default ContractProgressPage;