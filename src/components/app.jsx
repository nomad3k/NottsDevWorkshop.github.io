import 'normalize.css/normalize.css';
import 'styles/app.css';

import React from 'react';
import { Link } from 'react-router';
import { Grid, Cell, Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

class AppComponent extends React.Component {
  renderNavigation() {
    return (
      <Navigation>
        <Link to='/' className='mdl-navigation__link'>
          <i className='material-icons' style={{ verticalAlign: 'middle' }}>home</i>
          <span> Home</span>
        </Link>
      </Navigation>
    );
  }
  render() {
    const title = 'Notts Dev Workshop';
    return (
      <Layout fixedHeader>
        <Header title={title}>
          {this.renderNavigation()}
        </Header>
        <Content className='mdl-color--grey-100 backdrop'>
          <Grid>
            <Cell col={6} offsetDesktop={3} offsetTablet={1}>
              <div className='logo'>
                <Link to='/'>
                  <img src='/images/notts_dev_workshop_logo.png' className='logo__img' />
                </Link>
              </div>
            </Cell>
          </Grid>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
