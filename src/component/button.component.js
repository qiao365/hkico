import React, { PureComponent } from 'react';

class ButtonComponent extends PureComponent {

  onButtonClick = (event) => {
    this.props.clickHandle && this.props.clickHandle(event);
  }

  render() {
    return (
      <button type="button" onClick={this.onButtonClick} className={this.props.className}>{this.props.label}</button>
    );
  }
}

export default ButtonComponent;