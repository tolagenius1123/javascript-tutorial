function printMultiplicationTable(number) {
  for (let i = 1; i <= 12; i++) {
    let result = number * i;
      console.log(`${number} x ${i} = ${result}`);
  }
}

printMultiplicationTable(5);
