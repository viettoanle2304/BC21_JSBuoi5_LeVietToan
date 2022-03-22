document.getElementById("btn-bt3").addEventListener("click", () => {
  const n = document.getElementById("bt3__duLieu--soN").value * 1;

  const giaiThuaCuaN = tinhGiaiThua(n);

  document.getElementById("bt3__ketQua").innerHTML = `
  <p>Giai thừa của ${n} là: ${n}! = ${giaiThuaCuaN}</p>
  `;
});

const tinhGiaiThua = (x) => {
  let ketQua = 1;

  for (let i = 1; i <= x; ++i) {
    ketQua = ketQua * i;
  }

  return ketQua;
};
