class FizzBuzz {

    play(num) {
        if (num % 15 === 0) {
            return "fizzbuzz";
        } else if (num % 3 === 0) {
            return "fizz";
        } else if (num % 5 === 0) {
            return "buzz";
        } else {
            return num;
        };
        
    };

    printNumbers() {
        for (let i=1; i<100; i++) {
            console.log(this.play(i));
        };
    };

};

let fizzbuzz = new FizzBuzz();
fizzbuzz.printNumbers();