const { sum, myRemove, fizzBuzz, encode, decode} = require('./script')

describe('Primeiro exercicio.', () => {
  it('Espera encontrar function sum', () => {
    expect(typeof sum).toBe('function');
  });

  it('Verifica se a soma de 4 e 5 resulta em 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verifica se a soma de 0 e 0 resulta em 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Verifica se foi digitado em formato String', () => {
    expect(() => sum(4, '5')).toThrow('Não vou somar string.')
  });
});

describe('Segundo Exercicio.', () => {
  it('Existe a function myRemove.', () => {
    expect(typeof myRemove).toBe('function');
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4].', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4].', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4].', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('Terceiro exercicio.', () => {
  it('Faça uma chamada com o número 15 e verifique se o retorno é fizzbuzz', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Faça uma chamada com o número 9 e verifique se o retorno é fizz', () => {
    expect(fizzBuzz(9)).toBe('fizz');
  });

  it('Faça uma chamada com o número 10 e verifique se o retorno é buzz', () => {
    expect(fizzBuzz(10)).toBe('buzz');
  });

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o número', () => {
    expect(fizzBuzz(7)).toBe(7);
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é false', () => {
    expect(fizzBuzz('q')).toBe(false);
  });
});

describe('Quarto exercicio', () => {
  it('Retorne uma string codificada quando ultilizar a função encode', () => {
    expect(encode('hello')).toBe('h2ll4');
    expect(encode('Bom dia!!')).toBe('B4m d31!!');
    expect(encode('Vamos estudar?')).toBe('V1m4s 2st5d1r?');
  });

  it('Retorne uma string decodificada quando ultilizar a função decode', () => {
    expect(decode('h2ll4')).toBe('hello');
    expect(decode('B4m d31!!')).toBe('Bom dia!!');
    expect(decode('V1m4s 2st5d1r?')).toBe('Vamos estudar?');
  });
});