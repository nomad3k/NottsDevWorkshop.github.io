import React from 'react';

import { events, sponsors } from '../data';
import EventPanel from './event-panel';
import SponsorPanel from './sponsor-panel';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        <div className='events'>
        {events.map((e,ix) => (
          <EventPanel key={ix} event={e} />
        ))}
        </div>
        <div className='sponsors'>
          {sponsors.map((s,ix) => (
            <SponsorPanel key={ix} sponsor={s} />
          ))}
        </div>
      </div>
    );
  }
}

export default Homepage;
