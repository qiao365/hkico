import React, { Component } from 'react';
import { Item } from './';
import { service } from '../../manager';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      projectList: []
    };
  }

  componentWillMount() {
    service.findProjects(4).then((data) => {
      this.setState({
        projectList: data.list,
        count: data.count
      });
    })
  }

  render() {
    const { projectList } = this.state;
    return (
      <div>
        <link href="../css/index.css" rel="stylesheet"/>
        <section className="banner">
          <h1>There is the Main Slogan</h1>
          <h2>There is the SubSlogan</h2>
          <div className="entry">ENTRY</div>
        </section>
        <section className="pro_info">
          <div className="pro_top">
            <span>Project Overview</span>
            <span><a href="#/project/list">VIEW ALL</a></span>
          </div>
          <div className="pro_list row">
          {
            projectList.map((projectItem, idx) => {
              return (
                <Item key={projectItem.id} item={projectItem} />
              )
            })
          }
          </div>
        </section>
        <section className="initiate">
          <h1>Initiate a project, discover the future!</h1>
          <h2>There are no boundaries, keep go unleash your potential and create your own project.</h2>
          <a className="doit" href="#">JUST DO IT</a>
        </section>
      </div>
            /*
            <div className="col-sm-12 col-md-3">
              <div className="thumbnail">
                <img src="../images/project_01.png"/>
                <div className="caption">
                  <h3>ARAMLEE | Convertible</h3>
                  <p>A new album of songs addressing mental health issues, addiction, and family dysfunction. Thank you for your support!</p>
                  <span>94% funded</span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="thumbnail">
                <img src="../images/project_02.png"/>
                <div className="caption">
                  <h3>ARAMLEE | Convertible</h3>
                  <p>A sorcerer saves a girl from flesh-eating demons. After trying to use magic to find her friends, he’s trapped in a vision of the past.</p>
                  <span>92% funded</span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="thumbnail">
                <img src="../images/project_03.png"/>
                <div className="caption">
                  <h3>ARAMLEE | Convertible</h3>
                  <p>High quality leather handbags that transform into multiple shapes according to your needs</p>
                  <span>98% funded</span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="thumbnail">
                <img src="../images/project_04.png"/>
                <div className="caption">
                  <h3>ARAMLEE | Convertible</h3>
                  <p>A livestreamed play performed and delivered directly to your internet browser.</p>
                  <span>92% funded</span>
                </div>
              </div>
            </div>
            */
    )
  }
}
export default HomePage;
