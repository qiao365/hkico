import React, { PureComponent } from 'react';

class HorizontalInputComponent extends PureComponent {
  render() {
    const { props } = this;
    return (
      <div className="form-group row">
        <label className="col-sm-2 col-form-label col-form-label-sm">{props.label}</label>
        <div className="col-sm-9">
          <input type={props.type} className="form-control form-control-sm" value={props.inputValue||''} onChange={props.onchange} placeholder={props.placeHolder}/>
        </div>
      </div>
    )
  }
}

export default HorizontalInputComponent;
