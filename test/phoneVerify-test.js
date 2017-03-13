'use strict';

describe('test phoneVerify', () => {

    it('should return true if it is like: +XX XXX XXXX XXXX, and only contain ' +
        'following characters: +, ,-,[0-9], and not be empty', () => {

        const phone = '+12 345 6789 3456';

        const result = phoneVerify(phone);

        const expectText = true;

        expect(result).toEqual(expectText);
    });

    it('should return true if it is like: +(XX) XXX-XXXX-XXXX, ' +
        'and only contain following characters: +, ,-,[0-9], and not be empty', () => {

        const phone = '+(12) 456-3456-7890';

        const result = phoneVerify(phone);

        const expectText = true;

        expect(result).toEqual(expectText);
    });

    it('should return true if it is like: +XXXXXXXXXXXXX, and only contain following characters: +, ,-,[0-9], and not be empty', () => {

        const phone = '+1235678654678';

        const result = phoneVerify(phone);

        const expectText = true;

        expect(result).toEqual(expectText);
    });

    it('should return true if it is like: XXXXXXXXXXX, and only contain following characters: +, ,-,[0-9], and not be empty', () => {

        const phone = '12356784567';

        const result = phoneVerify(phone);

        const expectText = true;

        expect(result).toEqual(expectText);
    });

    it('should return false if it is empty', () => {

        const phone = '';

        const result = phoneVerify(phone);

        const expectText = false;

        expect(result).toEqual(expectText);
    });

    it('should return false if it contains e ', () => {

        const phone = '12341234123e';

        const result = phoneVerify(phone);

        const expectText = false;

        expect(result).toEqual(expectText);
    });
});