import 'normalize.css/normalize.css';
import 'styles/app.css';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className='logo'>
          <img src='/images/notts_dev_workshop_logo.png' className='logo__img' />
        </div>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
