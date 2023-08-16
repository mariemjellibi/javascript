//problème1
function getFirstValue(arr) {
	let firstOne= arr[0]
	return arr[0]
}
//probleme 2
function sumPolygon(n) {
    return (n - 2) * 180
}
//prob3
function addition(a, b) {
	return a+b
}
//prob4
function lessThanOrEqualToZero(num) {
	if(num <= 0)
		return true;
	else
		return false;
}
//p5
function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}
//p6
function circuitPower(voltage, current) {
	var power = voltage * current;
	return power;
}
//p7
function howManySeconds(hours) {
	return hours*3600
}
//p8
function cubes(a) {
	return a ** 3
}
//p9
function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toLowerCase());
      const newIndex = (index + shift) % 26;
      const newChar = isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
      
      result += newChar;
    } else {
      result += char;
    }
  }

  return result;
}

// Test cases
console.log(caesarCipher("abc", 1));  // Output: "bcd"
console.log(caesarCipher("xyz", 3));  // Output: "abc"
console.log(caesarCipher("Hello, World!", 5));  // Output: "Mjqqt, Btwqi!"