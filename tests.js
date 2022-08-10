// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

/* ---------------------------------------------------------------------------------------------- */

describe('sayHello', function() {
   it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
   });
   it('should return a string when called', function() {
      expect(typeof sayHello()).toBe("string");
   });
   it('should return the string "Hello, Jane!" when executed', function() {
      expect(sayHello("Jane")).toBe("Hello, Jane!");
   });
   it('should return the string "Hello, Alex!" when executed', function() {
      expect(sayHello("Alex")).toBe("Hello, Alex!");
   });
   it('should return the string "Hello, Pat!" when executed', function() {
      expect(sayHello("Pat")).toBe("Hello, Pat!");
   });
   it('should return the string "Hello, World!" when executed', function() {
       expect(sayHello("World")).toBe("Hello, World!");
   });
   it('should return true', function() {
       expect(sayHello(true)).toBe("Hello, World!");
   });
   it('should return false', function() {
       expect(sayHello(false)).toBe("Goodbye, World?");
   });
});

/* ---------------------------------------------------------------------------------------------- */

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
});

/* ---------------------------------------------------------------------------------------------- */

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed with 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed with-4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed with 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed with "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed with "8"', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed with "infinity"', function() {
        expect(isEven("infinity")).toBe(false);
    });
});

/* ---------------------------------------------------------------------------------------------- */

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when executed with "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when executed with "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed with "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed with 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when executed with a true or false ', function() {
        expect(isVowel(true, false)).toBe(false);
    });
    it('should return false when executed with "banana"', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when executed with ()', function() {
        expect(isVowel()).toBe(false);
    });
});

/* ---------------------------------------------------------------------------------------------- */

describe('isAdd', function() {
    it('should be a defined function', function() {
        expect(typeof isAdd).toBe('function');
    });
    it('should return 5 when executed with 2 and 3', function() {
       expect(isAdd(2,3)).toBe(5);
    });
    it('should return -12 when executed with -3 and -9', function() {
        expect(isAdd(-3,-9)).toBe(-12);
    });
    it('should return 5 when executed with 2 and 3', function() {
        expect(isAdd(2,3)).toBe(5);
    });
    it('should return 11 when executed with "5" and 6', function() {
        expect(isAdd("5",6)).toBe(11);
    });
    it('should return 6 when executed with "-4" and 10', function() {
        expect(isAdd("-4",10)).toBe(6);
    });
    it('should return NaN when executed with "banana" and "split"', function() {
        expect(isAdd("banana","split")).toBeNaN(NaN);
    });
    it('should return NaN when executed with 2 and "apples"', function() {
        expect(isAdd(2,"apples")).toBeNaN(NaN);
    });
    it('should be NaN when given "banana", "split"', function() {
        expect(isAdd("banana", "split")).toBeNaN(NaN);
    });
});

/* ---------------------------------------------------------------------------------------------- */

//example test!!!!

// it('should return (WHAT YOU'RE EXPECTING) when given (WHAT YOU'RE PASSING)', function() {
//     expect(functionName(WHAT YOU'RE PASSING)).toBe(WHAT YOU'RE EXPECTING);
// });

