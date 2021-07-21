/* eslint-disable */
import message from '../src';

jest.setTimeout(6000); // 因为message的timeout是5s，这个延长timeout时间

describe('message.typescript', () => {
  it('promise without auguments', () => {
    message.success('yes!!!', 0);
  });

  it('promise with one augument', done => {
    message.success('yes!!!').then(filled => {
      expect(filled).toBe(true);
      done();
    });
  });

  it('promise two auguments', done => {
    // jest超过5秒就抛异常了，而我们message默认是5秒
    message.success('yes!!!').then(
      filled => {
        expect(filled).toBe(true);
        done();
      },
      rejected => {
        expect(rejected).toBe(false);
      },
    );
  });

  it('hide', () => {
    const hide = message.loading('doing...');
    hide();
  });
});
