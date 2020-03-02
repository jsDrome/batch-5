import React from 'react';
import Hello from './hello';
import renderer from 'react-test-renderer';

describe('Hello', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<Hello />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});