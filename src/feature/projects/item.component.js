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
    funded = funded.toFixed(4);
    if(funded > 10) {
      funded = Math.round(funded);
    }else if(funded > 1) {
      funded = Math.toFixed(2);
    }
    const progressStyle = {width: funded + '%'};
    const funedStyle = {color: '#F05F40'};
    if(funded > 50) {
      funedStyle.color: '#FFF'
    }
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
              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={funded} aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
                <span className="progress-funded" style={funedStyle}>{funded}%</span>
              </div>
            </div>
            <div className="price">
              <span><i>{item.completed * 1}</i>已完成</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItemComponent;