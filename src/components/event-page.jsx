import React from 'react';
import { Link } from 'react-router';
import Markdown from 'react-markdown';

import { events, locations } from '../data';
import SpeakerPanel from './speaker-panel';
import LocationPanel from './location-panel';

class Homepage extends React.Component {
  render() {
    const { date } = this.props.params;
    const event = events.filter(e => e.date == date)[0];
    const location = locations[event.location];
    return (
      <div>
        <h2>Event Page</h2>
        <Link to='/'>Events</Link>
        <h3>Details</h3>
        <div className='event__details'>
          <div className='event__details-date'>
            <i className='fa fa-map-marker'></i>
            {location.name}
            {location.address}
          </div>
          <div className='event__details-date'>
            <i className='fa fa-microphone'></i>
            {event.speakers.map(s => s.name).join(' and ')}
          </div>
          <div className='event__details-date'>
            <i className='fa fa-calendar'></i>
            {event.date}
          </div>
          <div className='event__details-time'>
            <i className='fa fa-clock-o'></i>
            {event.time}
          </div>
        </div>
        <h3>Summary</h3>
        <Markdown source={event.summary} />
        <h3>Description</h3>
        <Markdown source={event.description} />
        <h3>What you will need</h3>
        <Markdown source={event.what_you_will_need} />
        <h3>Speakers</h3>
        {event.speakers.map((s,ix) => (
          <SpeakerPanel key={ix} speaker={s} />
        ))}
        <div className='event__location'>
          <LocationPanel location={location} />
        </div>
      </div>
    );
  }
}

export default Homepage;
