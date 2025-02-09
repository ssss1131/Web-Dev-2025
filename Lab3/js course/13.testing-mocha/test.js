describe("pow", function() {
    describe('raise to 3th', () => {
        function makeTest(x) {
            let expected = x ** 3;
            it(`should ${x} in the 3th power equal to ${expected}`, () => {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let i = 0; i < 5; i++) {
            makeTest(i);
        }
    });

    describe('checking invalid values', () => {
        it("for negative n the result is NaN", function() {
            assert.isNaN(pow(2, -1));
        });

        it("for non-integer n the result is NaN", function() {
            assert.isNaN(pow(2, 1.5));
        });

    });
    
});