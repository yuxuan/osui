/* eslint-disable */
// @ts-nocheck
import React from 'react';

import { mount } from 'enzyme';
import Space from '../src';
// eslint-disable-next-line no-unused-vars
import * as styleChecker from 'antd/lib/_util/styleChecker';

jest.mock('antd/lib/_util/styleChecker', () => ({
  canUseDocElement: () => true,
  isStyleSupport: () => true,
  detectFlexGapSupported: () => true,
}));

describe('flex gap', () => {
  it('should render width empty children', () => {
    const wrapper = mount(
      <Space>
        <span />
        <span />
      </Space>,
    );
    expect(wrapper.getDOMNode().style['column-gap']).toBe('8px');
    expect(wrapper.getDOMNode().style['row-gap']).toBe('8px');
  });
});
