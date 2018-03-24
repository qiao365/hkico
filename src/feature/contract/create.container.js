import React, { Component } from 'react';
import { HorizontalInputText, Button, Page } from '../../component';

const projectField = {
  ...(['name', 'short', 'icon', 'total', 'decimal', 'price', 'deadline', 'target', 'success'])
}

class CreateContractPage extends Component {

  constructor() {
    super();
    this.state = {};
  }

  onTextFieldNameChange = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value
    });
  }

  render() {
    const { name, short, icon, total, decimal, price, deadline, target, success } = projectField;
    return (
      <Page>
        <div className="login-form-container">
          <div className="form">
            <HorizontalInputText type="text" label="合约名称" inputValue={this.state[name]} onchange={this.onTextFieldNameChange(name)} placeHolder="英文全称"/>
            <HorizontalInputText type="text" label="简称" inputValue={this.state[short]} onchange={this.onTextFieldNameChange(short)} placeHolder="简称"/>
            <HorizontalInputText type="text" label="图标地址" inputValue={this.state[icon]} onchange={this.onTextFieldNameChange(icon)} placeHolder="图标url"/>
            <HorizontalInputText type="text" label="总量" inputValue={this.state[total]} onchange={this.onTextFieldNameChange(total)} placeHolder="预售总量"/>
            <HorizontalInputText type="text" label="精度" inputValue={this.state[decimal]} onchange={this.onTextFieldNameChange(decimal)} placeHolder="精度"/>
            <HorizontalInputText type="text" label="兑换价格" inputValue={this.state[price]} onchange={this.onTextFieldNameChange(price)} placeHolder="每个ETH兑换多少预售"/>
            <HorizontalInputText type="text" label="截止日期" inputValue={this.state[deadline]} onchange={this.onTextFieldNameChange(deadline)} placeHolder="预售期限"/>
            <HorizontalInputText type="text" label="成功目标" inputValue={this.state[target]} onchange={this.onTextFieldNameChange(target)} placeHolder="截止日期前，达成此目标为预售成功"/>
            <HorizontalInputText type="text" label="提前结束目标" inputValue={this.state[success]} onchange={this.onTextFieldNameChange(success)} placeHolder="达成此目标，直接完成预售"/>
          </div>
          <div className="action-group">
            <Button label="确定"  className="btn btn-primary"/>
          </div>
        </div>
      </Page>
    );
  }
}

export default CreateContractPage;
