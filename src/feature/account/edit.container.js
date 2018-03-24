import React, { Component } from 'react';
import { HorizontalInputText, Page } from '../../component';

const fields = {
  ...(['ethAddress'])
}

class AccountEditPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    console.log(this.props);
    const accountIdOfParam = this.props.match.params.accountId;
    const { accountId } = this.state;
    if (accountId !== accountIdOfParam) {
      // get the projectInfo;
      this.setState({
        accountId: accountIdOfParam
      });
    }
  }

  onTextFieldNameChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  render() {
    const { ethAddress } = fields;
    return (
      <Page>
        <HorizontalInputText type="text" label="以太坊地址" inputValue={this.state[ethAddress]} 
          onchange={this.onTextFieldNameChange(ethAddress)} />
      </Page>
    )
  }
}

export default AccountEditPage;