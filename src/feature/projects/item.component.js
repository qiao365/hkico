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
      /*
      <div className="item-container">
        <div className="item-title">{item.name}</div>
        <div className="item-content-container">
          <img src={item.logo} className="item-img" alt={item.desc}/>
            <label className="item-desc">
            {item.desc}
            </label>
            <div className="item-action">
              <Button label="详情" clickHandle={this.onDetailClickHandle}/>
              <span>{item.status}</span>
            </div>
        </div>
      </div>
      */
      <div className="col-sm-12 col-md-4">
        <div className="thumbnail" onClick={this.onDetailClickHandle}>
          <img src="../images/project_01.png"/>
          <div className="caption">
            <h3>ARAMLEE | Convertible</h3>
            <p>A new album of songs addressing mental health issues, addiction, and family dysfunction. Thank you for your support!</p>
            <div className="deploy">
              <span>by Ryan Sohmer</span>
              &nbsp;丨&nbsp;
              <span>17 hours ago </span>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                80%
              </div>
            </div>
            <div className="price">
              <span><i>$13,000</i>pledged</span>
              <span>technology</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItemComponent;