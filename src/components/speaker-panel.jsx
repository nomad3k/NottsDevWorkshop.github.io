import React from 'react';
import Markdown from 'react-markdown';
import { Card, CardTitle, CardText, CardActions } from 'react-mdl';

import { links } from '../data';
import LinkPanel from './link-panel';

class SpeakerPanel extends React.Component {
  render() {
    const { hideBio, speaker } = this.props;
    return (
      <Card className='speaker width--full' shadow={2}>
        <CardTitle>
          <div className='speaker__name'>
            <h4>{speaker.name}</h4>
          </div>
        </CardTitle>
        <CardText>
          <div className='speaker__headline'>
            <div className='speaker__avatar'>
              <img src={speaker.avatar} className='speaker__avatar-img' />
            </div>
            <div className='speaker__quote'>
              {speaker.quote}
            </div>
          </div>
          {hideBio ? (null) : (
            <div className='speaker__bio justify'>
              <Markdown source={speaker.bio} />
            </div>
          )}
        </CardText>
        <CardActions border>
          <div className='speaker__links'>
            {Object.getOwnPropertyNames(speaker.links).map((p, ix) => (
              <LinkPanel key={ix} link={links[p]} value={speaker.links[p]} />
            ))}
          </div>
        </CardActions>
      </Card>
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
