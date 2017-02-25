import React from 'react';

import { links } from '../data';
import LinkPanel from './link-panel';
import { Card, CardTitle, CardText, CardActions, Spacer } from 'react-mdl';

class SponsorPanel extends React.Component {
  render() {
    const { sponsor } = this.props;
    return (
      <Card className='sponsor width--full' shadow={2}>
        <CardTitle className='sponsor__name mdl-color-text--primary'>
          <h4>{sponsor.name}</h4>
        </CardTitle>
        <CardText>
          <div className='sponsor__logo'>
            <img src={sponsor.logo} className='sponsor__logo-img' />
          </div>
        </CardText>
        <CardActions border className='sponsor__links'>
          <Spacer/>
          {Object.getOwnPropertyNames(sponsor.links).map((p,ix) => (
            <LinkPanel key={ix} link={links[p]} value={sponsor.links[p]} />
          ))}
        </CardActions>
      </Card>
    );
  }
}

SponsorPanel.propTypes = {
  sponsor: React.PropTypes.object
};

export default SponsorPanel;
