import React, { PureComponent } from 'react';
import './page.css';

class PageComponent extends PureComponent {

  onButtonClick = (event) => {
    this.props.clickHandle && this.props.clickHandle(event);
  }

  render() {
    // const { className } = this.props;
    return (
      <section className="pro_info container">
        <link href="../css/product.css" rel="stylesheet"/>
        <div className="pro_top">
          <span>Explore <i> 23 </i> projects</span>
        </div>
        <div className="pro_list row">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default PageComponent;