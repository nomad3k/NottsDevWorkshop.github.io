import React from 'react';

class LocationPanel extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div className='location'>
        <h4>{location.name}</h4>
        <iframe src={location.map}
                width={600}
                height={450}
                frameBorder={0}
                style={{border:0}}
                allowFullScreen></iframe>
      </div>
    );
  }
}

export default LocationPanel;
