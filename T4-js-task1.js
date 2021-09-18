function palindrome(str) {
  let lowCaseStr = str.toLowerCase();
  let reverseStr = lowCaseStr.split('').reverse().join(''); 
  return reverseStr === lowCaseStr;
}