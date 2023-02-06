// ClassList Property
// add - thêm class
// contains - kiểm tra có tồn tại class không
// remove - xóa class
// toggle - nếu có class thì xóa đi, nếu chưa có thì thêm vào

var boxElement = document.querySelector(".box");
// console.log(boxElement.classList[0]);
boxElement.classList.add("red");
boxElement.classList.remove("red");
// setTimeout(() => {
//   boxElement.classList.toggle("red");
// }, 3000);
setInterval(() => {
  boxElement.classList.toggle("red");
}, 1000);
console.log(boxElement.classList.contains("blue"));
