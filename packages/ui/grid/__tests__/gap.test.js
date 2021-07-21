/* eslint-disable */
// @ts-nocheck
import React from 'react';

import ReactDOMServer from 'react-dom/server';
import { mount } from 'enzyme';
import Col from '@osui/col';
import Row from '@osui/row';
// eslint-disable-next-line no-unused-vars
import * as styleChecker from 'antd/lib/_util/styleChecker';

jest.mock('antd/lib/_util/styleChecker', () => ({
  canUseDocElement: () => true,
  isStyleSupport: () => true,
  detectFlexGapSupported: () => true,
}));

describe('Grid.Gap', () => {
  it('should use gap', () => {
    const wrapper = mount(
      <Row gutter={[16, 8]}>
        <Col />
      </Row>,
    );

    expect(wrapper.find('.ant-row').props().style).toEqual(
      expect.objectContaining({
        marginLeft: -8,
        rowGap: 8,
        marginRight: -8,
      }),
    );
  });

  it('not break ssr', () => {
    const warnSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const Demo = () => (
      <Row gutter={[16, 8]}>
        <Col />
      </Row>
    );

    const div = document.createElement('div');

    const ssrTxt = ReactDOMServer.renderToString(<Demo />);
    div.innerHTML = ssrTxt;

    const wrapper = mount(<Demo />, { hydrateIn: div });

    expect(warnSpy).not.toHaveBeenCalled();

    warnSpy.mockRestore();

    wrapper.unmount();
  });
});
