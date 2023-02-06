// innerText và textContent Property
// Lấy nội dung của text
var headingElement = document.querySelector(".heading");
console.log(headingElement.innerText);
// console.log(headingElement.textContent);
// Thay đôi nội dung của text
headingElement.innerText = `
                            New Heading
                          `;
// headingElement.textContent = `
//                               New Heading
//                             `;

// Sự khác nhau giữa innerText và textContent :
// Cả 2 đều bỏ qua thẻ tag bên ngoài
// Khi lấy ra text innerText sẽ hiển thị những gì chúng ta nhìn thấy trên trình duyệt, còn textContent sẽ hiển thị tất cả mọi thứ, bao gồm phần bị ẩn đi do CSS, code, ...
// Khi thay đổi text thì ngược lại, textContent sẽ thay đổi text mà không quan tâm đến khoảng trắng, xuống dòng còn innerText sẽ tính cả xuống dòng và các khoảng trắng, mỗi 1 lần xuống dòng sẽ dc quy vào 1 thẻ br

// InerHTML / outerHTML - thêm một Element vào 1 Element có sẵn

// DOM CSS
// C1
var boxElement = document.querySelector(".box");
// boxElement.style.width = "200px";
// boxElement.style.height = "100px";
// boxElement.style.backgroundColor = "red";
// C2
// Object.assign(boxElement.style, {
//   width: "200px",
//   height: "100px",
//   backgroundColor: "red",
// });
// console.log(boxElement.style);
