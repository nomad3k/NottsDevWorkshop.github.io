import React from 'react';

import { links } from '../data';
import LinkPanel from './link-panel';

class SponsorPanel extends React.Component {
  render() {
    const { sponsor } = this.props;
    return (
      <div className='sponsor'>
        <h3 className='sponsor__name'>
          {sponsor.name}
        </h3>
        <div className='sponsor__logo'>
          <img src={sponsor.logo} className='sponsor__logo-img' />
        </div>
        <div className='sponsor__links'>
          {Object.getOwnPropertyNames(sponsor.links).map((p,ix) => (
            <LinkPanel key={ix} link={links[p]} value={sponsor.links[p]} />
          ))}
        </div>
      </div>
    );
  }
}

SponsorPanel.propTypes = {
  sponsor: React.PropTypes.object
};

export default SponsorPanel;
