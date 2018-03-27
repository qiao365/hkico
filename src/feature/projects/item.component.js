import React, { Component } from 'react';
import './item.css';

class ProjectItemComponent extends Component {
  onDetailClickHandle = (event) => {
    const { item, handleItemClick } = this.props;
    handleItemClick && handleItemClick(item);
  }
  render() {
    const { item } = this.props;
    const funded = item.completed / item.total * 100;
    const progressStyle = {width: item.funded + '%'};
    return (
      <div className="col-sm-12 col-md-4">
        <div className="thumbnail" onClick={this.onDetailClickHandle}>
          <img src="../images/can_01.png"/>
          <div className="caption">
            <h3>{item.name}</h3>
            <p>{item.abbr}</p>
            <div className="deploy">
              <span>creator</span>
              &nbsp;丨&nbsp;
              <span>End Time </span>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={item.funded} aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
                {item.funded}
              </div>
            </div>
            <div className="price">
              <span><i>{item.funded}%</i>已完成</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItemComponent;