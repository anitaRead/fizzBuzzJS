describe("FizzBuzz", function() {
    
    describe("prints numbers", function() {
        let fizzBuzz = new FizzBuzz();
        it("1 to 100", function(){
            expect(fizzBuzz.printNumbers()).not.toBe(null);
        });
    });

    describe("if divisible by 15", function() {
        let fizzBuzz = new FizzBuzz();
        it("prints fizzbuzz", function() {
            expect(fizzBuzz.play(15)).toBe("fizzbuzz");
        });
    });

    describe("if divisible by 5", function() {
        let fizzBuzz = new FizzBuzz();
        it("prints fizz", function() {
            expect(fizzBuzz.play(5)).toBe("buzz");
        });
    });

    describe("if divisible by 3", function() {
        let fizzBuzz = new FizzBuzz();
        it("prints fizz", function() {
            expect(fizzBuzz.play(3)).toBe("fizz");
        });
    });
});
