'use strict';

describe('test usernameVerify', () => {

  it('should return true if it only contains word character (letter, number, underscore), and it is 8 to 32 characters', () => {

    const username = 'abcdefghi';

    const result = usernameVerify(username);

    const expectText = true;

    expect(result).toEqual(expectText);
  });

  it('should return false if it is shorter than 8 characters', () => {

      const username = 'abcd';

      const result = usernameVerify(username);

      const expectText = false;

      expect(result).toEqual(expectText);
  });

  it('should return false if it is longer than 32 characters', () => {

      const username = 'abcdabcdabcdancdabcdabcdabcdancdabcdabcdabcdancd';

      const result = usernameVerify(username);

      const expectText = false;

      expect(result).toEqual(expectText);
  });

  it('should return false if it contains none-word-charaters, eg @', () => {

        const username = 'a@cdabcdab';

        const result = usernameVerify(username);

        const expectText = false;

        expect(result).toEqual(expectText);
  });

    it('should return false if it contains none-word-charaters, eg blank space', () => {

        const username = 'a cdabcdab';

        const result = usernameVerify(username);

        const expectText = false;

        expect(result).toEqual(expectText);
    });


});
