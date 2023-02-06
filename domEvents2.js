// Ví dụ DOM Events thực tế
// 1. Input / Select - lấy thông tin nhập vào
// 2. Key up / down - keyboard events
// onkeyup: khi nhác phím lên, onkeydown: khi ấn phím xuống, onkeypress: khi nhấn phím/giữ

var inputValue;
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function (e) {
  inputValue = e.target.value;
  console.log(inputValue);
};
// inputElement.oninput = function (e) {
//   console.log(e.target.value);
// };

var inputElement2 = document.querySelector('input[type="checkbox"]');
inputElement2.onchange = function (e) {
  console.log(e.target.checked);
};

var inputElement3 = document.querySelector("select");
inputElement3.onchange = function (e) {
  console.log(e.target.value);
};

document.onkeyup = function (e) {
  // console.log(e.which);
  switch (e.which) {
    case 27:
      console.log("EXIT");
      break;
    case 13:
      console.log("OK");
      break;
  }
};
