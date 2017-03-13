'use strict';

describe('test passwordConfirmVerify', () => {

    it('should return true if one string is the same as another', () => {

        const value = '123';
        const passValue = '123';

        const result = passwordConfirmVerify(value, passValue)

        const expectText = true;

        expect(result).toEqual(expectText);
    });

    it('should return false if one is 123, and another is "123"', () => {

        const value = 123;
        const passValue = '123';

        const result = passwordConfirmVerify(value, passValue)

        const expectText = false;

        expect(result).toEqual(expectText);
    });
});