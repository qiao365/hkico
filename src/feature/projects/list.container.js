import React, { Component } from 'react';
import { remoteGetProjectList } from '../../manager';
import { Page } from '../../component';
import { ProjectItem } from './';

class ProjectListPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    this.setState({
      projectList: remoteGetProjectList(10)
    });
  }

  handleItemClick = (item) => {
    const { history } = this.props;
    console.log(item);
    history.push(`/project/show/${item.id || 0}`);
  }

  render() {
    const { projectList } = this.state;
    // console.log('project list', projectList, remoteGetProjectList);
    return (
      <Page>
        {
          projectList.map((projectItem, idx) => {
            return (
              <ProjectItem key={projectItem.guid} item={projectItem} handleItemClick={this.handleItemClick}/>
            )
          })
        }
      </Page>
    )
  }
}

export default ProjectListPage;