/* eslint-disable */
// @ts-nocheck
import React from 'react';

import { mount } from 'enzyme';
import Dropdown from '../src';
import Menu from '@osui/menu';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { sleep } from '../../../tests/utils';

describe('Dropdown', () => {
  mountTest(() => (
    <Dropdown menu={<Menu />}>
      <span />
    </Dropdown>
  ));

  rtlTest(() => (
    <Dropdown menu={<Menu />}>
      <span />
    </Dropdown>
  ));

  it('overlay is function and has custom transitionName', () => {
    const wrapper = mount(
      <Dropdown overlay={() => <div>menu</div>} transitionName="move-up" visible>
        <button type="button">button</button>
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('overlay is string', () => {
    const wrapper = mount(
      <Dropdown overlay="string" visible>
        <button type="button">button</button>
      </Dropdown>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('support Menu expandIcon', async () => {
    const props = {
      overlay: (
        <Menu expandIcon={<span id="customExpandIcon" />}>
          <Menu.Item key="1">foo</Menu.Item>
          <Menu.SubMenu title="SubMenu">
            <Menu.Item key="1">foo</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      ),
      visible: true,
      getPopupContainer: node => node,
    };

    const wrapper = mount(
      <Dropdown {...props}>
        <button type="button">button</button>
      </Dropdown>,
    );
    await sleep(500);
    expect(wrapper.find(Dropdown).find('#customExpandIcon').length).toBe(1);
  });
});
