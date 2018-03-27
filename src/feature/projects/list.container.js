import React, { Component } from 'react';
import { service, util } from '../../manager';
import { Page } from '../../component';
import { ProjectItem } from './';

class ProjectListPage extends Component {
  constructor() {
    super();
    this.state = {
      projectList: []
    };
  }
  componentWillMount() {
    service.findProjects().then((data) => {
      this.setState({
        projectList: data.list,
        count: data.count
      });
    })
  }

  handleItemClick = (item) => {
    const { history } = this.props;
    history.push(`/project/show/${item.id || 0}`);
  }

  render() {
    const { projectList, count } = this.state;
    return (
      <Page count={count}>
        {
          projectList.map((projectItem, idx) => {
            return (
              <ProjectItem key={projectItem.id} item={projectItem} handleItemClick={this.handleItemClick}/>
            )
          })
        }
      </Page>
    )
  }
}

export default ProjectListPage;