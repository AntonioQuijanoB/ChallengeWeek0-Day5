function pyramid(numFloor) {
  for (let i = 0; i < numFloor; i++) {
    let piso = '';
    for (let j = 0; j < i + 1; j++) {
      piso = piso + '*';
    }
    console.log(piso);
  }
}
pyramid(9);
