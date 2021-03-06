import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { gradient, hex, splitted } from 'lib';

import { ColorPicker, LuminosityGroup, MixedGroup } from 'containers';
import { Container } from 'ui';
import './index-page.scss';

@connect(state => ({ lead: state.color.lead, mixer: state.color.mixer }))
export default class IndexPage extends PureComponent {
  static propTypes = {
    lead: PropTypes.string.isRequired,
    mixer: PropTypes.string.isRequired,
  }

  render() {
    const { lead, mixer } = this.props;
    const luminosity = splitted.getLuminosity(hex.splitHex(this.props.lead));
    const titlesClassName = cx('header__titles', {
      'header__titles--dark': luminosity >= 50,
      'header__titles--light': luminosity < 50,
    });

    return (
      <div className="page index-page">
        <header className="header" style={{ backgroundImage: gradient.createGradient([lead, mixer]) }}>
          <Container className="header__inner">
            <div className={titlesClassName}>
              <h1 className="header__title">
                The last color service you will ever need
              </h1>
              <h2 className="header__subtitle">
                Just pick one color and let the magic happen
              </h2>
            </div>
            <div className="header__color-picker">
              <ColorPicker />
            </div>
          </Container>
        </header>

        <Container>
          <LuminosityGroup />
          <MixedGroup />
        </Container>
      </div>
    );
  }
}
