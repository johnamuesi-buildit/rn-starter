import React from 'react';
import {COLOURS} from '../../theme';

export default HeaderComponent = () => (
  <Header>
    <Left />

    <Body>
      <Title style={{color:COLOURS.secondary}}>{this.props.title}</Title>
    </Body>
    <Right />
  </Header>
);
