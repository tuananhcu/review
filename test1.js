//tăng giá trị các phần tử trong mảng thêm 1
// var arr = [1, 2, 3, 4, 5];
// var result = arr.map((value) => value + 1);
// console.log(result);

//Kiểm tra xem nếu phần tử trong mảng là số chẵn thì nhân phần tử đó với 2
// var arr = [1, 2, 3, 4, 5];
// var result = arr.map((value) => {
//   value % 2 == 0 ? (value = value * 2) : (value = value);
//   return value;
// });
// console.log(result);

//Tìm kiếm phần tử trong mảng - hàm indexOf sẽ trả về vị trí đầu tiên mà nó tìm thấy của phần tử hoặc trả về -1 nếu không tìm thấy phần tử
// var arr = [1, 2, 3, 4, 5];
// arr.includes(6) ? console.log("Founded") : console.log("No found");
// var result = arr.indexOf(6);
// console.log(result);

//Loại bỏ phần tử trùng trong mảng
// C1
// var arr = [1, 1, 2, 3, 4, 5, 6, 7, 7];
// var newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (newArr.indexOf(arr[i]) === -1) newArr.push(arr[i]);
// }
// console.log(newArr);
// C2
// var arr = [1, 1, 2, 3, 4, 5, 6, 7, 7];
// var newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) newArr.push(arr[i]);
// }
// console.log(newArr);
// C3
// var arr = [1, 1, 2, 3, 4, 5, 6, 7, 7];
// var newArr = [];
// arr.forEach((value) => {
//   if (!newArr.includes(value)) newArr.push(value);
// });
// console.log(newArr);
// C4
// var arr = [1, 1, 2, 3, 4, 5, 6, 7, 7];
// var newArr = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(newArr);

// Object
// var students = [
//   { name: "Trần Văn A", address: "HN", age: 20 },
//   { name: "Trần Văn B", address: "ĐN", age: 21 },
//   { name: "Trần Văn C", address: "HCM", age: 22 },
// ];
// var result = students.map((value) => {
//   value.age += 1;
//   return value;
// });
// console.log(result);
// var result = students.map((value) => {
//   if (value.address === "HN") value.age *= 2;
//   return value;
// });
// console.log(result);

// reduce()
// var courses = [
//   { id: 1, name: "HTML", coin: 100 },
//   { id: 2, name: "CSS", coin: 200 },
//   { id: 3, name: "JS", coin: 300 },
// ];
// var totalCoin = courses.reduce(coin=>{

// },0)

// Tạo tỷ lệ ngẫu nhiên
// var result = Math.floor(Math.random() * 100);
// if (result < 50) {
//   console.log("Cường hóa thành công");
// } else {
//   console.log("Cường hóa thất bại");
// }
