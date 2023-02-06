// 1. Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance
// ----------------------------------------------------------

// 1. Xử lý nhiều việc khi 1 event xảy ra
// Dùng DOM event khi muốn lắng nghe 1 sự kiện nào đó và không muốn gỡ bỏ nó đi.
// Dùng Event listener khi muốn xử lí nhiều việc sẽ làm code dễ bóc tách hơn (dùng DOM event vẫn được), đặc biệt hữu ích khi 1 sự kiện diễn ra nhưng ta muốn hủy bỏ sự kiện trong 1 trường hợp cụ thể nào đó.

// 2. Lắng nghe / Hủy bỏ lắng nghe
// Xem ví dụ video 79 để rõ hơn!
var btn = document.getElementById("btn");
console.log(btn);

// JSON (JavaScript Object Notation) là một định dạng dữ liệu (thể hiện dưới dạng chuỗi)
// JSON có thể thể hiện các kiểu dữ liệu dạng: Number, Boolean, Null, Array, Object
// Mã hóa (Encode)/Giải mã (Decode) - Stringify/Parse
// Ví dụ chuỗi json
var json = '"abc"';
var json2 = '["JavaScript","PHP"]';
var json3 = '{"name":"Son Dang","age":18}';
// Chuyển chuỗi json về dữ liệu trong JS
var a = "1";
console.log(JSON.parse(a));
// Chuyển dữ liệu thành JSON
console.log(JSON.stringify(2));
