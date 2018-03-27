import React, { Component } from 'react';
import { HorizontalInputText, Button, Page } from '../../component';
import { service, util } from '../../manager';

class CreateProjectPage extends Component {

  constructor() {
    super();
    this.state = {};
  }

  onClick = (event) => {
    const { history } = this.props;
    service.newProject(this.state).then((data) => {
      history.push("/");
    })
  }

  onTextChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="main col-md-6 col-md-offset-3" action="/hkico/project/applyProject" method="post">
          <div className="form">
            <HorizontalInputText type="text" label="项目名称" onchange={this.onTextChange('name')} />
            <HorizontalInputText type="text" label="简称" onchange={this.onTextChange('abbr')} />
            <HorizontalInputText type="text" label="项目描述" onchange={this.onTextChange('desc')} />
            <HorizontalInputText type="text" label="项目网址" onchange={this.onTextChange('url')} />
            <HorizontalInputText type="text" label="白皮书" onchange={this.onTextChange('whitePaper')} />
            <HorizontalInputText type="text" label="ETH地址" onchange={this.onTextChange('address')} />
            <HorizontalInputText type="text" label="代币地址" onchange={this.onTextChange('tokenAddress')} />
            <HorizontalInputText type="text" label="代币比例" onchange={this.onTextChange('tokenScale')} />
            <HorizontalInputText type="text" label="众筹额度" onchange={this.onTextChange('total')} />
            <HorizontalInputText type="text" label="结束时间(分钟)" onchange={this.onTextChange('time')} />
            <HorizontalInputText type="text" label="备注" onchange={this.onTextChange('remarks')} />
          </div>
          <div className="action-group">
            <Button type="button" label="确定" className="btn btn-primary" clickHandle={this.onClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default CreateProjectPage;