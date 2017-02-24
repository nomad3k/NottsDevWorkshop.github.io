import React from 'react';
import { Link } from 'react-router';
import Markdown from 'react-markdown';

import SpeakerPanel from './speaker-panel';

class EventPanel extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <div className='event'>
        <div className='event__title'>
          <Link to={`/${event.date}/${event.link}`}>
            <h2>{event.title}</h2>
          </Link>
        </div>
        <div className='event__date'>
          <h3>{event.date}</h3>
        </div>
        <div className='event__description'>
          <Markdown source={event.summary} />
        </div>
        <div className='event__speakers'>
          {event.speakers.map((s,ix) => (
            <SpeakerPanel key={ix} speaker={s} hideBio />
          ))}
        </div>
      </div>
    );
  }
}

EventPanel.propTypes = {
  event: React.PropTypes.object.isRequired
};

export default EventPanel;
