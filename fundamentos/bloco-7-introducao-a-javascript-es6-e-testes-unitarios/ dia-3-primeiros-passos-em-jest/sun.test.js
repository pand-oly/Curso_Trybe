const sum = (a, b) => a + b;

describe('Arquivo do Course.', () => {
  it('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});