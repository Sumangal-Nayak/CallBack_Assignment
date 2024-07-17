function manipulateString(inputString, callback) {
  const manipulatedString = inputString.toUpperCase();
  callback(manipulateString);
}

function logString(manipulatedString) {
  console.log(`The manipulated string is: ${manipulateString}`);
}

manipulateString("hello, world!", logString);