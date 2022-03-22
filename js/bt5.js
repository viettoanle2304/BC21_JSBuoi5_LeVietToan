document.getElementById("btn-bt5").addEventListener("click", () => {
  const n = document.getElementById("bt5__duLieu--soN").value * 1;

  let content = "";
  for (let i = 1; i <= n; ++i) {
    if (isPrime(i)) {
      content += `${i} `;
    }
  }

  //   console.log(content);

  document.getElementById("bt5__ketQua").innerHTML = `
  <p>Các số nguyên tố từ 1 đến ${n} là: </p>
  <p>${content}</p>
  `;
});

const isPrime = (num) => {
  if (num < 2) {
    return false;
  } else if (num == 2 || num == 3) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); ++i) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }
};
