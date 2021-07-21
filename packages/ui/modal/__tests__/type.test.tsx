import * as React from 'react';
import Modal from '../src';

describe('Modal.typescript', () => {
  it('Modal.okType', () => {
    const form = <Modal okType="danger" />;

    expect(form).toBeTruthy();
  });
});
