document.getElementById("btn-bt2").addEventListener("click", () => {
  const x = document.getElementById("bt2__duLieu--soX").value * 1;
  const n = document.getElementById("bt2__duLieu--soN").value * 1;
  console.log(x, n);

  const ketQua = tinhTong(x, n);

  document.getElementById("bt2__ketQua").innerHTML = `
  <p>Kết quả: ${ketQua}</p>
  `;
});

const tinhTong = (x, n) => {
  let sum = 0;

  for (let i = 1; i <= n; ++i) {
    sum += Math.pow(x, i);
  }

  return sum;
};
