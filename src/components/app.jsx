import 'normalize.css/normalize.css';
import 'styles/app.css';

import React from 'react';
import { Link } from 'react-router';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className='logo'>
          <Link to='/'>
            <img src='/images/notts_dev_workshop_logo.png' className='logo__img' />
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
