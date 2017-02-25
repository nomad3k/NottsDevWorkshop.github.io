import React from 'react';
import { Link } from 'react-router';
import Markdown from 'react-markdown';
import { Card, CardTitle, CardText, CardActions, Spacer } from 'react-mdl';

import SpeakerPanel from './speaker-panel';

class EventPanel extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <Card className='event width--full' shadow={2}>
          <CardText>
            {event.speakers.map((s,ix) => (
              <div key={ix} className='speaker__headline'>
                <div className='speaker__avatar'>
                  <img src={s.avatar} className='speaker__avatar-img' />
                </div>
                <h5 className='speaker__name'>{s.name}</h5>
                <div className='speaker__quote'>{s.quote}</div>
              </div>
            ))}
            <h4 className='mdl-color-text--primary'>{event.date} - {event.title}</h4>
            <div className='event__summary justify'>
              <Markdown source={event.summary} />
            </div>
          </CardText>
          <CardActions border>
            <Spacer />
            <Link to={`/${event.date}/${event.link}`} className='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--accent'>View</Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}

EventPanel.propTypes = {
  event: React.PropTypes.object.isRequired
};

export default EventPanel;
