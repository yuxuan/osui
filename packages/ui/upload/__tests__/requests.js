/* eslint-disable */
describe('placeholder', () => {
  it('placeholder', () => {
    expect(1).toBe(1);
  })
})

export const successRequest = ({ onSuccess, file }) => {
  setTimeout(() => {
    onSuccess(null, file);
  });
};

export const errorRequest = ({ onError }) => {
  setTimeout(() => {
    onError();
  });
};
