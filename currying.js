function sum(a) {
  let currentSum = a;

  function inner(b) {
    if (b === undefined) {
      return currentSum; 
    }
    currentSum += b; 
    return inner; 
  }

  return inner; 
}

console.log(sum(1)(2)(3)(4)(5)()); 
console.log(sum(3)(7)());          
