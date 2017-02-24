import React from 'react';

import { links } from '../data';
import LinkPanel from './link-panel';
import Markdown from './markdown';

class SpeakerPanel extends React.Component {
  render() {
    const { hideBio, speaker } = this.props;
    return (
      <div className='speaker'>
        <div className='speaker__name'>
          {speaker.name}
        </div>
        <div className='speaker__avatar'>
          <img src={speaker.avatar} />
        </div>
        <div className='speaker__quote'>
          {speaker.quote}
        </div>
        {hideBio ? (null) : (
          <div className='speaker__bio'>
            <Markdown value={speaker.bio} />
          </div>
        )}
        <div className='speaker__links'>
          {Object.getOwnPropertyNames(speaker.links).map((p, ix) => (
            <LinkPanel key={ix} link={links[p]} value={speaker.links[p]} />
          ))}
        </div>
      </div>
    );
  }
}

SpeakerPanel.propTypes = {
  speaker: React.PropTypes.object.isRequired,
  hideBio: React.PropTypes.bool
};

SpeakerPanel.defaultPropTypes = {
  showBio: false
};

export default SpeakerPanel;
