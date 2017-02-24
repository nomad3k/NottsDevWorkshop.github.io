import 'normalize.css/normalize.css';
import 'styles/app.css';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Nottingham Developer Workshop</h1>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
