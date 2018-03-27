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
    const funded = item.completed / item.total;
    const progressStyle = {width: item.completed + '%'};
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
          <img src="../images/can_01.png"/>
          <div className="caption">
            <h3>{item.name}</h3>
            <p>{item.abbr}</p>
            <div className="deploy">
              <span>创建人</span>
              &nbsp;丨&nbsp;
              <span>剩余时间 </span>
            </div>
            <div className="progress">
              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={item.funded} aria-valuemin="0" aria-valuemax="100" style={{progressStyle}}>
                {item.funded}
              </div>
            </div>
            <div className="price">
              <span><i>{item.completed}</i>已完成</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItemComponent;