import React from 'react';
import { Link } from 'react-router';

import { events } from '../data';
import SpeakerPanel from './speaker-panel';
import Markdown from './markdown';

class Homepage extends React.Component {
  render() {
    const { date } = this.props.params;
    const event = events.filter(e => e.date == date)[0];
    return (
      <div>
        <h2>Event Page</h2>
        <Link to='/'>Events</Link>
        <h3>Summary</h3>
        <Markdown value={event.summary} />
        <h3>Description</h3>
        <Markdown value={event.description} />
        <h3>What you will need</h3>
        <Markdown value={event.what_you_will_need} />
        <h3>Speakers</h3>
        {event.speakers.map((s,ix) => (
          <SpeakerPanel key={ix} speaker={s} />
        ))}
      </div>
    );
  }
}

export default Homepage;
