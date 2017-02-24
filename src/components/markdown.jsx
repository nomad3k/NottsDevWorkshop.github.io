import React from 'react';

class Markdown extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div>
      {value.split('\n').map((p,ix) => (
        <p key={ix}>{p}</p>
      ))}
      </div>
    );
  }
}

Markdown.propTypes = {
  value: React.PropTypes.string.isRequired
};

export default Markdown;
