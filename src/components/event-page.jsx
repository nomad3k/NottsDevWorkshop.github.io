import React from 'react';
import { Link } from 'react-router';
import Markdown from 'react-markdown';
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';

import { events, locations } from '../data';
import SpeakerPanel from './speaker-panel';
import LocationPanel from './location-panel';

class Homepage extends React.Component {
  render() {
    const { date } = this.props.params;
    const event = events.filter(e => e.date == date)[0];
    const location = locations[event.location];
    return (
      <Grid>
        <Cell col={6} offsetDesktop={3}>
          <Card className='width--full' shadow={2}>
            <CardTitle>
              <h4>{event.date} - {event.title}</h4>
            </CardTitle>
            <CardText>
              <div className='event__details'>

                <div className='event__details-element'>
                  <div className='fa fa-map-marker'></div>
                  <div>{location.name}</div>
                </div>

                <div className='event__details-element'>
                  <div className='fa fa-microphone'></div>
                  <div>
                    {event.speakers.map(s => s.name).join(' and ')}
                  </div>
                </div>

                <div className='event__details-element'>
                  <div className='fa fa-calendar'></div>
                  <div>
                    {event.date}
                  </div>
                </div>

                <div className='event__details-element'>
                  <div className='fa fa-clock-o'></div>
                  <div>
                    {event.time}
                  </div>
                </div>

              </div>

              <h4>Description</h4>

              <div className='event__summary justify'>
                <Markdown source={event.summary} />
              </div>

              <div className='event__description justify'>
                <Markdown source={event.description} />
              </div>

              <h4>What you will need</h4>

              <div className='event__what-you-will-need justify'>
                <Markdown source={event.what_you_will_need} />
              </div>

            </CardText>
          </Card>
        </Cell>
        {event.speakers.map((s,ix) => (
          <Cell col={6} offsetDesktop={3}>
            <SpeakerPanel key={ix} speaker={s} />
          </Cell>
        ))}

        <Cell col={6} offsetDesktop={3}>
          <div className='event__location'>
            <LocationPanel location={location} />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Homepage;
