import React from 'react';

import { Card, CardTitle, CardText } from 'react-mdl';

class LocationPanel extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Card className='location width--full' shadow={2}>
        <CardTitle>
          <h4>{location.name}</h4>
        </CardTitle>
        <CardText>
          <div className='location__address'>
            {location.address}
          </div>
          <div className='location__map'>
            <iframe src={location.map}
                    width='100%'
                    height='100%'
                    frameBorder={0}
                    style={{ border:0 }}
                    allowFullScreen></iframe>
          </div>
        </CardText>
      </Card>
    );
  }
}

export default LocationPanel;
