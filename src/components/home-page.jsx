import React from 'react';

import { events, sponsors } from '../data';
import EventPanel from './event-panel';
import SponsorPanel from './sponsor-panel';

class Homepage extends React.Component {
  render() {
    const next = events[0];
    const prior = events.slice(1);
    return (
      <div className='homepage'>
        <div className='events__next'>
          <h3 className='events__next-title'>Next</h3>
          <EventPanel event={next} />
        </div>
        <div className='events__prior'>
          <h3 className='events__prior-title'>Previous Events</h3>
          {prior.map((e,ix) => (
            <EventPanel key={ix} event={e} />
          ))}
        </div>
        <div className='sponsors'>
          <h3 className='sponsors__title'>Sponsors</h3>
          {sponsors.map((s,ix) => (
            <SponsorPanel key={ix} sponsor={s} />
          ))}
        </div>
      </div>
    );
  }
}

export default Homepage;
