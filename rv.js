// var nodeDom = document.querySelectorAll(".para");
// console.log(nodeDom);

// var nodeList = document.querySelector(".box-1");
// console.log(nodeList.querySelectorAll("li"));
// console.log(nodeList.getElementsByTagName("li")[0]);

// // Chú ý: chỉ có getElementById và querySelector là trả về thẳng element, các cách còn lại trả về NodeList, HTMLCollection gần giống như mảng,nên nếu cần lấy element cụ thể ta cần thêm chỉ số
// getElementsByClassName, getElementsByTagName -> HTMLCollection
// querySelectorAll -> NodeList

// DOM atribute - thêm và lấy giá trị attribute
// C1
// var headingElement = document.querySelector("h1");
// headingElement.title = "title test";
// console.log(headingElement);
// console.log(headingElement.title);
// C2
// var headingElement = document.querySelector("h1");
// var headingElement2 = document.querySelector("h2");
// headingElement.setAttribute("data", "data-test");
// console.log(headingElement);
// console.log(headingElement.getAttribute("data"));
// headingElement2.setAttribute("class", "red");

// Sự khác biệt giữa C1 và C2 là với setAttribute, getAttribute ta có thể thêm những attribute không hợp lệ cho element
