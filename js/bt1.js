let sum = 0;
let num = 0;

for (num; sum <= 10000; ++num) {
  sum += num;
}

// console.log(--num);
document.getElementById("bt1__ketQua").innerHTML = `
<p>Số nguyên dương nhỏ nhất cần tìm là: ${--num}</p>
<p>Tổng: 1 + 2 + 3 + ... + 141 = 10011</p>
`;
