//*** CHAPTER 3: FUNCTIONS ***//

    /* MINIMUM */
    // (number, number): Returns the smaller number
    let min = (a, b) => a < b ? a : b;
    
    console.assert(min(1, 2) === 1, { 
      result: min(1, 2), 
      message: "1 is less than 2" 
    });
    console.assert(min(-1, -2) === -2, { 
      result: min(-1, -2), 
      message: "-2 is less than -1" 
    });
    console.assert(min(19, 12) === 12, { 
      result: min(19, 12), 
      message: "12 is less than 19" 
    });
    console.assert(min(10, 10) === 10, { 
      result: min(10, 10), 
      message: "The two numbers are equal" 
    });

    /* RECURSION */
    // 0 is even. 1 is odd. for any other number, evenness = N - 2

    function isEven(num) {
      if (num === 0) {
        return true;
      } else if (num === 1) {
        return false;
      } else if (num < 0) {
        return isEven(-num);
      } else {
        return isEven(num - 2);
      }
    }

    console.assert(isEven(50) == true, { result: isEven(50), message: "50 is even" });
    console.assert(isEven(75) == false, {result: isEven(75), message: "75 is odd" });

    
    /* BEAN COUNTING */
    // (string): Returns number of 'B' characters contained in string
    let str1 = "Best Western"; 
    let str2 = "My big Blue Balloon"; 
    let str3 = "Grab a Bouncing Ball Boy!";
    
    function countBs(str) {
      return countChar(str, 'B');
    }

    console.assert(countBs(str1) === 1, { result: countBs(str1), message: `There is one B in ${str1}` });
    console.assert(countBs(str2) === 2, { result: countBs(str2), message: `There are two Bs in ${str2}` });
    console.assert(countBs(str3) === 3, { result: countBs(str3), message: `There are three Bs in ${str3}` });


    // (string, character): Returns number of given character contained in string
    function countChar(str, char) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === char) count++;
      }
      return count;
    }

    console.assert(countChar(str1, 'e') === 3, {
      result: countChar(str1, 'e'),
      message: `There are three es in ${str1}`
    });
    console.assert(countChar(str2, 'Y') === 0, {
      result: countChar(str2, 'Y'),
      message: `There are no Os in ${str2}`
    }); 
    console.assert(countChar(str3, 'o') === 2, {
      result: countChar(str3, 'o'),
      message: `There are two os in ${str3}`
    });


//*** CHAPTER 4: DATA STRUCTURES ***//




    // console.assert( === , { result: , message: "" });

