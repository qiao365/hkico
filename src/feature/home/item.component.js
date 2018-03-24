import React, { Component } from 'react';
import './item.css';
import { Button } from '../../component';

class ProjectItemComponent extends Component {
  onDetailClickHandle = (event) => {
    const { item, handleItemClick } = this.props;
    handleItemClick && handleItemClick(item);
  }
  render() {
    const { item } = this.props;
    return (
      <div className="col-sm-12 col-md-3">
        <div className="thumbnail">
          <img src="../images/project_01.png">
          <div className="caption">
            <h3>ARAMLEE | Convertible</h3>
            <p>A new album of songs addressing mental health issues, addiction, and family dysfunction. Thank you for your support!</p>
            <span>94% funded</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItemComponent;