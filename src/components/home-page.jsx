import React from 'react';

import { events } from '../data';
import EventPanel from './event-panel';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        {events.map((e,ix) => (
          <EventPanel key={ix} event={e} />
        ))}
      </div>
    );
  }
}

export default Homepage;
