import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ColorDisplayGroup } from 'app/components';

@connect(state => ({ colors: state.color.luminosity }))
export default class LuminosityGroupContainer extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired,
  }

  render() {
    return (
      <ColorDisplayGroup
        title="Darker and lighter"
        colors={this.props.colors}
      />
    );
  }
}