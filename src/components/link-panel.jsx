import React from 'react';

class LinkPanel extends React.Component {
  render() {
    const { link, value } = this.props;
    return (
      <a target='_blank' href={link.url.replace(/\{0\}/g, value)}>
        <i className={`fa fa-${link.icon}`}></i>
      </a>
    );
  }
}

LinkPanel.propTypes = {
  link: React.PropTypes.object,
  value: React.PropTypes.string
};

export default LinkPanel;
