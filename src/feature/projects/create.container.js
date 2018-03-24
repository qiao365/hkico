import React, { Component } from 'react';
import { HorizontalInputText, Button, Page } from '../../component';

const projectField = {
  ...(['projectName', 'projectShort', 'projectSummary', 'projectUrl', 'paperUrl', 'teamSummary'])
}

class CreateProjectPage extends Component {

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
    const { projectName, projectShort, projectSummary, projectUrl, paperUrl, teamSummary } = projectField;
    return (
      <Page>
        <div className="login-form-container">
          <div className="form">
            <HorizontalInputText type="text" label="项目名称" inputValue={this.state[projectName]} onchange={this.onTextFieldNameChange(projectName)} />
            <HorizontalInputText type="text" label="简称" inputValue={this.state[projectShort]} onchange={this.onTextFieldNameChange(projectShort)} />
            <HorizontalInputText type="text" label="项目描述" inputValue={this.state[projectSummary]} onchange={this.onTextFieldNameChange(projectSummary)} />
            <HorizontalInputText type="text" label="项目网址" inputValue={this.state[projectUrl]} onchange={this.onTextFieldNameChange(projectUrl)} />
            <HorizontalInputText type="text" label="白皮书" inputValue={this.state[paperUrl]} onchange={this.onTextFieldNameChange(paperUrl)} />
            <HorizontalInputText type="text" label="团队介绍" inputValue={this.state[teamSummary]} onchange={this.onTextFieldNameChange(teamSummary)} />
          </div>
          <div className="action-group">
            <Button label="确定"  className="btn btn-primary"/>
          </div>
        </div>
      </Page>
    )
  }
}

export default CreateProjectPage;