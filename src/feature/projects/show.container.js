import React, { Component } from 'react';
import { Partcipate } from './';
import './show.css';
import { service } from '../../manager';

class ProjectShowPage extends Component {
  constructor() {
    super();
    this.state = {
      project: {},
      part: ''
    };
  }
  componentWillMount() {
    const projectId = this.props.match.params.projectId;
    service.findProjectInfo(projectId).then((data) => {
      // get the projectInfo;
      this.setState({
        projectId: projectId,
        project: data.project
      });
    })
  }
  remindmeClick = (event) => {
    console.log()
    this.setState({part: <Partcipate callback={this.removePart} id={this.state.projectId} toCodePageHandle={this.toCodePage} />})
  }
  removePart = (event) => {
    this.setState({part: ''})
  }
  toCodePage = (projectId) => {
    const { history } = this.props;
    history.push("/project/remind/" + projectId);
  }
  render() {
    const { projectId, project, part } = this.state;
    const funded = project.completed / project.total * 100;
    const progressStyle = {width: funded + '%'};
    return (
      <div className="main-container">
          <div className="main-top-container flex">
              <div className="main-top-left-section">
                  <img src="../images/can_01.png" alt="" />
              </div>
              <div className="main-top-right-section white-Bgcolor">
                  <p className="fontSize24">
                      {project.name}
                  </p>
                  <p style={{'marginTop': '16px','marginBottom': '16px'}}>
                      <span className="theme-Fontcolor fontSize32">${project.total * 1}</span>
                      <span className="color-Opcity54 fontSize18">pledged</span>
                  </p>
                  <div>
                      <p className="loadbase-line">
                          <span className="theme-Bgcolor loadbase-line-inside" style={progressStyle}></span>
                      </p>
                      <div className="flex flex-pack-justify margin-top-8">
                          <p className="theme-Fontcolor">{project.completed * 1} funded</p>
                          <p>1,435 backers</p>
                      </div>
                      <p style={{'marginTop': '16px', 'marginBottom': '24px'}} className="color-Opcity54 fontSize14">{project.remarks}</p>
                      <button className="theme-Bgcolor readme-btn" onClick={this.remindmeClick}>PARTCIPATE IN</button>
                  </div>
              </div>
          </div>
          <div className="main-center-content-container margin-top-24 flex flex-pack-justify">
              <div className="main-center-left-section white-Bgcolor padding-24">
                  <div className="header-title flex flex-align-center">
                      <p className="theme-Fontcolor">Campaign</p>
                      <p>Comments</p>
                  </div>
                  <div className="article-main-wrapper">
                      <p className="article-main-words">what is slice of sauce ?</p>
                      <p>Slice of Sauce™ transforms the traditional condiment aisle with individual “slices” of Signature Recipe Ketchup in a convenient and portable package of 8 portions. Layer it onto your burgers, sandwiches, wraps and more for a delicious burst of flavor and a perfect no-mess bite every time. </p>
                      <img src="../images/project_05.png" alt="" />
                      <p>
                          Slice of Sauce™ is a modern update to ordinary condiments. The slice is a tantalizing layer of flavor and lets you enjoy a perfect portion with every bite.<br/>
                          <br/>
                          We’ve got a clean label. Our ingredients are vegan, non-GMO, gluten-free, all-natural with no artificial flavors, preservatives, or high-fructose corn syrup.<br/>
                          <br/>
                          It’s so easy to add a slice. Because it’s in slice form, there’s no sticky mess or soggy bread, no “liquidy” separation and no uneven squeezing from a part-empty bottle like with many traditional condiments.
                      </p>
                  </div>
              </div>
              <div className="main-center-right-section">
                  <ul>
                      <li className="main-center-right-listItem padding-24">
                          <p className="common-title-item-style">Project sponsor</p>
                          <div className="lisItem-bottom-article flex common-article-item-style">
                              <p className="head-portrait"></p>
                              <div className="something-produce-content">
                                  <p className="fontSize18">Taylor Swift</p>
                                  <p className="color-Opcity54  margin-top-8">We're here to put a dent in the universe. Otherwise why else even be here?</p>
                              </div>
                          </div>
                      </li>
                      <li className="main-center-right-listItem padding-24  margin-top-24">
                          <div className="flex flex-pack-justify common-title-item-style">
                              <p className="color-Opcity87 fontSize18">US$ 100</p>
                              <p className="color-Opcity54">1,032 backers</p>
                          </div>
                          <div className="lisItem-bottom-article flex common-article-item-style">
                              <div className="something-produce-content">
                                  <p>THANKS FOREVER!</p>
                                  <p className="color-Opcity54 fontSize14 margin-top-8">
                                      We'll send you an exclusive playlist of music that inspired the cast and creative team behind SEAGULLMACHINE.
                                  </p>
                                  <br/>
                                  <p className="color-Opcity54 fontSize12">ESTIMATED DELIVERY <span className="color-Opcity87">Apr 2018 </span></p>
                              </div>
                          </div>
                      </li>
                      <li className="main-center-right-listItem padding-24  margin-top-24">
                          <div className="flex flex-pack-justify common-title-item-style">
                              <p className="color-Opcity87 fontSize18">US$ 100</p>
                              <p className="color-Opcity54">1,032 backers</p>
                          </div>
                          <div className="lisItem-bottom-article flex common-article-item-style">
                              <div className="something-produce-content">
                                  <p>THANKS FOREVER!</p>
                                  <p className="color-Opcity54 fontSize14 margin-top-8">
                                      We'll send you an exclusive playlist of music that inspired the cast and creative team behind SEAGULLMACHINE.
                                  </p>
                                  <br/>
                                  <p className="color-Opcity54 fontSize12">ESTIMATED DELIVERY <span className="color-Opcity87">Apr 2018 </span></p>
                              </div>
                          </div>
                      </li>
                      <li className="main-center-right-listItem padding-24  margin-top-24">
                          <div className="flex flex-pack-justify common-title-item-style">
                              <p className="color-Opcity87 fontSize18">US$ 500</p>
                              <p className="color-Opcity54">23 backers</p>
                          </div>
                          <div className="lisItem-bottom-article flex common-article-item-style">
                              <div className="something-produce-content">
                                  <p>THANKS FOREVER!</p>
                                  <p className="color-Opcity54 fontSize14 margin-top-8">
                                      The Codename Colossus M1A2 Light Walker - Squad Leader version is a 1/35 scale polyurethane resin cast and 3D printed model kit with lights and a motor. This kit comes with a character figure, Sergeant Reynolds.
                                  </p>
                                  <br/>
                                  <p className="color-Opcity54 fontSize12">ESTIMATED DELIVERY <span className="color-Opcity87">Apr 2018 </span></p>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="m-main-center-content-container margin-top-24">
              <div className="header-title flex flex-align-center">
                  <p className="theme-Fontcolor">Intorduce</p>
              </div>
              <div className="m-lisItem-wrapper">
                  <div className="flex  white-Bgcolor" style={{padding: '24px', 'marginTop': '1px'}}>
                      <p className="head-portrait"></p>
                      <div className="something-produce-content ">
                          <p className="fontSize18">Taylor Swift</p>
                          <p className="color-Opcity54  margin-top-8">We're here to put a dent in the universe. Otherwise why else even be here?</p>
                          <button className="m-sendMessage-btn margin-top-16"><a href="./messageListM.html">SEND MESSAGE</a></button>
                      </div>
                  </div>
                  <div className="m-article-main-wrapper white-Bgcolor" style={{'marginTop': '1px'}}>
                      <p className="article-main-words">what is slice of sauce ?</p>
                      <p>Slice of Sauce™ transforms the traditional condiment aisle with individual “slices” of Signature Recipe Ketchup in a convenient and portable package of 8 portions. Layer it onto your burgers, sandwiches, wraps and more for a delicious burst of flavor and a perfect no-mess bite every time. </p>
                      <img src="../images/project_05.png" alt="" />
                      <p>
                          Slice of Sauce™ is a modern update to ordinary condiments. The slice is a tantalizing layer of flavor and lets you enjoy a perfect portion with every bite.<br/>
                          <br/>
                          We’ve got a clean label. Our ingredients are vegan, non-GMO, gluten-free, all-natural with no artificial flavors, preservatives, or high-fructose corn syrup.<br/>
                          <br/>
                          It’s so easy to add a slice. Because it’s in slice form, there’s no sticky mess or soggy bread, no “liquidy” separation and no uneven squeezing from a part-empty bottle like with many traditional condiments.
                      </p>
                  </div>
              </div>
          </div>
          {part}
      </div>
    )
  }
}

export default ProjectShowPage;
