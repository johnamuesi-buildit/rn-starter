import React from 'react';

export default (HeaderComponent = () => (
  <Header>
    <Left />

    <Body>
      <Title>{this.props.title}</Title>
    </Body>
    <Right />
  </Header>
));
