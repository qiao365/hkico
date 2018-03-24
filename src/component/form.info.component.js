import React, { PureComponent } from 'react';

class FormInfoComponent extends PureComponent {
  onButtonClick = (event) => {
    this.props.clickHandle && this.props.clickHandle(event);
  }

  render() {
    const { props } = this;
    return (
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm">{props.label}</label>
        <div className="col-sm-9">
          <span>{props.inputValue || props.emptyInfo}</span>
        </div>
      </div>
    );
  }
}

export default FormInfoComponent;