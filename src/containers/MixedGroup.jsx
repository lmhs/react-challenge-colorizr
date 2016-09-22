import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorDisplayGroup } from 'components';

@connect(state => ({
  mixer: state.get('color').get('mixer'),
  colors: state.get('color').get('mixedGroup').toArray(),
}))
export default class MixedGroup extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    mixer: PropTypes.string.isRequired,
  }

  render() {
    return (
      <ColorDisplayGroup
        title={`Mixed with ${this.props.mixer}`}
        colors={this.props.colors}
      />
    );
  }
}
