// 1. preventDefault
// Loại bỏ các hành vi mặc định của trình duyệt trên một thẻ HTML
var linkElement = document.links;
// var linkElement = document.querySelectorAll("a");
for (var i = 0; i < linkElement.length; ++i) {
  linkElement[i].onclick = function (e) {
    // console.log(e.target.href);
    if (!e.target.href.startsWith("https://f8.edu.vn")) {
      e.preventDefault();
    }
  };
}

var ulElement = document.querySelector("ul");
ulElement.onmousedown = function (e) {
  e.preventDefault();
};
ulElement.onclick = function (e) {
  console.log(e.target);
};

// 2. stopPropagation
// Loại bỏ sự kiện nổi bọt trong DOM Events
document.querySelector("div").onclick = function () {
  console.log("DIV");
};
document.querySelector("button").onclick = function (e) {
  e.stopPropagation();
  console.log("Click me!");
};
