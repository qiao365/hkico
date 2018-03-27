import React, { Component } from 'react';

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
          <img src="../images/project_01.png"/>
          <div className="caption">
            <h3>{item.name}</h3>
            <p>{item.remarks}</p>
            <span>{item.completed / item.total}% funded</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItemComponent;