const service = require("./service")

describe('Ex. 1', () => {
  it('Testing if the function exist', () => {
    expect(typeof service.randomNumb).toBe('function');
  });
  
  it('Testing if the function returns a number', () => {
    expect(typeof service.randomNumb()).toBe('number');
  });
  
  it('Testing with mocks', () => {
    service.randomNumb = jest.fn();
  
    service.randomNumb();
    expect(service.randomNumb).toHaveBeenCalledTimes(1)
  });
  
  it('Testing with mocks', () => {
    service.randomNumb = jest.fn().mockReturnValue(3);
  
    service.randomNumb();
    expect(service.randomNumb()).toBe(3)
  });
});

describe('Ex. 2', () => {
  it('Testing mocksImplementation', () => {
    service.randomNumb = jest.fn().mockImplementation((a, b) => a / b);
    service.randomNumb(4, 2);
  
    expect(service.randomNumb).toHaveBeenCalled();
    expect(service.randomNumb).toHaveBeenCalledTimes(1);
    expect(service.randomNumb(4, 2)).toBe(2);
  })

  it('check whenther the application of the new implementation happens only once', () =>{
    expect(typeof service.randomNumb()).toBe('number');
  })

  it('Using "mockImplementationOnce" for knowledge', () => {
    const randomNumb = jest.fn().mockImplementationOnce((a, b) => a / b);
    // randomNumb(4, 2);

    // expect(randomNumb).toHaveBeenCalled();
    expect(randomNumb(4, 2)).toBe(2);
    randomNumb.mockClear();
  })
});

describe('Ex. 3', () => {
  it('test', () => {
    service.randomNumb = jest.fn().mockImplementation((a, b, c) => a * b * c);
    service.randomNumb(2, 2, 2);
  
    expect(service.randomNumb).toHaveBeenCalledWith(2, 2, 2);
    expect(service.randomNumb(2, 2, 2)).toBe(8);
    
    service.randomNumb.mockReset();
    expect(service.randomNumb).toHaveBeenCalledTimes(0);

    service.randomNumb.mockImplementation(a => a * 2);

    expect(service.randomNumb(5)).toBe(10);
    expect(service.randomNumb).toHaveBeenCalled();
    expect(service.randomNumb).toHaveBeenCalledTimes(1);
    expect(service.randomNumb).toHaveBeenCalledWith(5);
  })
});

describe('Ex. 4', () => {
  it('A-1',() => {
    const mockFunc = jest.spyOn(service, 'firstFunc').mockImplementationOnce(
      (str) => str.toLowerCase()
    );
    expect(mockFunc('TEST')).toBe('test');
    // service.firstFunc.mockRestore();
    expect(service.firstFunc('test')).toBe('TEST');
  });

  it('A-2', () => {
    const mockFunc = jest.spyOn(service, 'secondFunc').mockImplementation(
      (str) => str[str.length -1]
    )
    expect(mockFunc('Test')).toBe('t');
    expect(mockFunc('Test')).not.toBe('T');
    service.secondFunc.mockRestore();
    expect(service.secondFunc('Test')).toBe('T');
  });

  it('A-3', () => {
    const mockFunc = jest.spyOn(service, 'thirdFunc').mockImplementationOnce(
      (str1, str2, str3) => str1.concat(str2, str3)
    )

    expect(mockFunc('abc ', 'def ', 'ghi')).toBe('abc def ghi');
    // service.thirdFunc.mockRestore();
    expect(service.thirdFunc('abc', ' def')).toBe('abc def')
  });
});