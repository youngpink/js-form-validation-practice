'use strict';

describe('test emailVerify', () => {

  it('should return true if it must be in the form of XXX@xxx.xx, ' +
      'only contains word character (letter, number, underscore), and can not be empty', ()=>{

    const email = 'abc@fgh.i';

    const result = emailVerify(email);

    const expectText = true;

    expect(result).toEqual(expectText);
  });

  it('should return false if it do not contain @', () => {

      const email = 'abcfgh.i';

      const result = emailVerify(email);

      const expectText = false;

      expect(result).toEqual(expectText);
  });

    it('should return false if it do not contain .', () => {

        const email = 'abcfgh@i';

        const result = emailVerify(email);

        const expectText = false;

        expect(result).toEqual(expectText);
    });

  it('should return false if it contains none-word-charaters, eg $', () => {

        const username = 'a@cda$.cdab';

        const result = usernameVerify(username);

        const expectText = false;

        expect(result).toEqual(expectText);
  });


});
