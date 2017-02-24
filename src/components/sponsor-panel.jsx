import React from 'react';

import { links } from '../data';
import LinkPanel from './link-panel';

class SponsorPanel extends React.Component {
  render() {
    const { sponsor } = this.props;
    return (
      <div className='sponsor'>
        <h3>{sponsor.name}</h3>
        <img src={sponsor.logo} />
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
