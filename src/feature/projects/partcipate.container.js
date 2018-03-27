import React, { Component } from 'react';

class PartcipatePage extends Component {

  constructor() {
    super();
    this.state = {};
  }

  onCodeClickHandle = (event) => {
    const projectId = this.props.id;
    this.props.toCodePageHandle(projectId);
  }

  onClosePart = (event) => {
    this.props.callback();
  }

  render() {
    return (
      <div className="model-wrapper">
        <div className="model-confirm-dialog text-center">
            <i className="close-icon" onClick={this.onClosePart}><img src="../images/Close.svg" alt="" /></i>
            <h2 className="fontSize24 color-Opcity87">Precautions</h2>
            <p className="fontSize14 color-Opcity87 text-left">
                1. When selecting investment, choose the amount of investment according to your risk tolerance;<br/>
                <br/>
                2. After acknowledging that the deposit has been paid, there will be a three-day repentance period that exceeds the repentance period, and there are legitimate reasons for applying for a withdrawal;<br/>
                <br/>
                3. Always use the recommended wallet (imToken wallet) to invest the ETH invested in the crowdfunding website, pay attention to keep the corresponding transaction records, and use this as a proof; if you make money by yourself or follow the investment, you will bear the responsibility.<br/>
                <br/>
                4. The post-investment department of the crowdfunding website will assist the lead investee in urging the project funders to implement the financing commitments and the investment agreement agreement. In the event of a dispute, the parties will promptly organize and assist the investor in coordinating or litigating;
            </p>
            <button><a href="javascript:;" onClick={this.onCodeClickHandle}>ACCEPT AND CONTINUE</a></button>
        </div>
      </div>
    );
  }
}

export default PartcipatePage;