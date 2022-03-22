document.getElementById("btn-bt4").addEventListener("click", () => {
  let content = "";

  for (let i = 0; i < 10; ++i) {
    if (i % 2 == 0) {
      content += `<div style="background: red; height: 40px; border-radius: 5px; margin-bottom: 2px"></div>`;
    } else {
      content += `<div style="background: blue; height: 40px; border-radius: 5px; margin-bottom: 2px"></div>`;
    }
  }

  document.getElementById("bt4__ketQua").innerHTML = content;
});
