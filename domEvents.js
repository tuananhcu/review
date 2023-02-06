// DOM Events -W3 schools
// 1. Atribute events - thêm thẳng event vào trong attribute của thẻ
// Chú ý: - this sẽ trả về chính element đang sử dụng Dom events, xem ví dụ
//        - Nếu tác động vào thành phần con của 1 thẻ có Dom event thì hành động của cha vẫn thực hiện - sự kiện nổi bọt

// 2. Assign event using the element node - gán sự kiện qua element node
// Chú ý: Để trả về chính element đang sử dụng Dom events với cách này ta dùng e.target
var h1Element = document.querySelectorAll("h1");
for (var i = 0; i < h1Element.length; i++) {
  // h1Element[i].onclick = function () {
  //   console.log(this);
  // };

  h1Element[i].onclick = function (e) {
    console.log(e.target);
  };
}
