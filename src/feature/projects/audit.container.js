import React, { Component } from 'react';
import { HorizontalInputText, Button } from '../../component';

class ProjectAuditPage extends Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page-container">
        <div className="page-body">
          <div>项目信息</div>
          <div className="action-group">
            <Button label="接收" className="btn btn-primary"/>
            <Button label="否决" className="btn btn-primary"/>
          </div>
        </div>
      </div>
    )
  }
  
}