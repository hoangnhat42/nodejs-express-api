//function check isPrime
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(isPrime(2))

//function check is palindrome
function isPalindrome(n) {
    let str = n.toString();
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr;
}

//function grouping by day
function groupByDay(schedule) {
    const result = {};
  
    schedule.forEach(item => {
      const { Date, Subject } = item;
  
      if (!result[Date]) {
        result[Date] = [Subject];
      } else {
        result[Date].push(Subject);
      }
    });
  
    return result;
  }
  
  // Example usage
  const input = [
    { Date: 'Monday', Subject: 'A' },
    { Date: 'Tuesday', Subject: 'B' },
    { Date: 'Monday', Subject: 'C' },
    { Date: 'Wednesday', Subject: 'A' },
    { Date: 'Wednesday', Subject: 'C' },
    { Date: 'Tuesday', Subject: 'C' },
    { Date: 'Friday', Subject: 'D' },
  ];
  
  console.log(groupByDay(input));
  