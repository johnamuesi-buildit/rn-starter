import React from 'react';
import renderer from 'react-test-renderer';
import {COLOURS} from '../../theme';

import {HomeScreen} from '../../screens/HomeScreen/HomeScreen';

it('exports a style object', () => {
    expect(typeof COLOURS).toBe('object');
});

it('renders successfully without children', () => {
    const rendered = renderer.create(<HomeScreen/>).toJSON();
    console.log(rendered);
    expect(rendered).toBeTruthy();
}); 