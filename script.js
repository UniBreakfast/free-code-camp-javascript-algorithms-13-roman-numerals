const numberInput = document.getElementById('number')
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementsByName('output')[0]

const numDict = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

numberInput.addEventListener('input', () => {
  numberInput.value = numberInput.value
    .replace(/[^0-9\-]|^0/g, '').replace(/(\d)-/g, '$1')
})

convertBtn.addEventListener('click', e => {
  e.preventDefault()

  const number = numberInput.value

  if (!number) {
    output.value = "Please enter a valid number"
  } else if (number < 0) {
    output.value = "Please enter a number greater than or equal to 1"
  } else if (number >= 4000) {
    output.value = "Please enter a number less than or equal to 3999"
  } else {
    output.value = convert(number)
  }
})

function convert(num) {
  let result = ''

  for (const char in numDict) {
    const value = numDict[char]

    while (num >= value) {
      result += char
      num -= value
    }
  }

  return result
}
