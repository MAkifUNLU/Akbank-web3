function oddishOrEvenish(number) {
    let intArray = []
    let sum = 0
    let strNumber = number.toString()
    let array = strNumber.split("")

    for (let i = 0; i < arr.length; i++) {
        intArray.push(parseInt(array[i]))
    }

    for (let i = 0; i < intArray.length; i++) {
        sum += intArray[i]
    }
    
    return sum % 2 == 0 ? "Even" : "Odd"
}

console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))
console.log(oddishOrEvenish(4434))
console.log(oddishOrEvenish(4435))