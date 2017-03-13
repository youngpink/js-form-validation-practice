'use strict';

describe('test passwordVerify', () => {

    it('should return true if it at least contain one capital letter, at least contain ' +
        'one number, at least contain one special character, at least 12 characters, at most 128 characters', () => {

        const password = '@T7rty890wsdfgr';

        const result = passwordVerify(password);

        const expectText = true;

        expect(result).toEqual(expectText);
    });

    it('should return false if it not contain capital letter', () => {

        const password = '@7rty890wsdfgr';

        const result = passwordVerify(password);

        const expectText = false;

        expect(result).toEqual(expectText);
    });

    it('should return false if it not contain number', () => {

        const password = '@TTTrtywsdfgr';

        const result = passwordVerify(password);

        const expectText = false;

        expect(result).toEqual(expectText);
    });

    it('should return false if it not contain special charecters', () => {

        const password = '9TTTrty0wsdfgr';

        const result = passwordVerify(password);

        const expectText = false;

        expect(result).toEqual(expectText);
    });

    it('should return false if it is shorter than 12 characters', () => {

        const password = '9@Trty';

        const result = passwordVerify(password);

        const expectText = false;

        expect(result).toEqual(expectText);
    });
});
