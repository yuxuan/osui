/* eslint-disable */

import mock from 'xhr-mock';

describe('placeholder', () => {
  it('placeholder', () => {
    expect(1).toBe(1);
  })
})

export function setup() {
  mock.setup();
  mock.post('http://upload.com/', (req, res) => {
    req.headers({
      'content-length': 100,
    });
    req.body('thisisbody');
    return res;
  });
}

export const teardown = mock.teardown.bind(mock);
