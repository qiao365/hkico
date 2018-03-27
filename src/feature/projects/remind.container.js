import React, { Component } from 'react';
import './remind.css';
import QRCode from 'qrcode.react';
import { service } from '../../manager';

class RemindComponent extends Component {
  constructor() {
    super();
    this.state = {
      project: {}
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
  render() {
    const { project } = this.state;
    const size = 222;
    return (
      <div className="qrCode-main-container">
        <div className="text-center inside-main-container">
          <h2 className="fontSize24 color-Opcity87">CONTRACT ADDRESS</h2>
          <p className="fontSize14 color-Opcity54 address-crypto" style={{marginTop: '8px'}}>{project.contract || '0x61DF287BAc17a2daFe20Bb2508673e3cd97A832D'}</p>
          <div className="qrCode-container">
          </div>
          <div className="qrcodeImg-wrapper">
            <QRCode value={project.contract || '0x61DF287BAc17a2daFe20Bb2508673e3cd97A832D'} size={size} />
          </div>
          <div className="flex flex-pack-center">
            <img src="../images/fullscreen.svg" alt="" />
            <p className="fontSize12 color-Opcity54" style={{lineHeight: '24px', marginLeft: '8px'}}>Recommend using imToken wallet to pay</p>
          </div>
        </div>
        <div className="copy-success-tip">
          <img src="../images/success_icon.svg" alt="" />
          <p>复制成功</p>
        </div>
      </div>
    )
  }
}

export default RemindComponent;