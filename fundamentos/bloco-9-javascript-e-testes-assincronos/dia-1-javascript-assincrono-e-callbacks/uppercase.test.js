const { uppercase } = require('./script')

it('Exercicio 7', (done) => {
  uppercase('abcd', (str) => {
    try {
      expect(str).toBe('ABCD');
      done();
    } catch (error) {
      done(error);
    }
  });
});
