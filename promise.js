// Promise
// - Sync (đồng bộ) : code nào viết trước chạy trước
// - Async (bất đồng bộ) : setTimeOut, setInterval, fetch, XHLHttpRequest, file reading (đọc file trong JS), request animation frame

// Callback dùng để xử lí các thao tác bất đồng bộ
// Callback hell : hiện tượng nhiều callback lồng nhau -> code nhìn rối

// Promise : sinh ra để xử lí bất đồng bộ và tránh trường hợp callback hell. Để tạo ra promise ta sử dụng từ khóa new với promise contructor,ta truyền vào 1 executor function. Trong executor function ta nhận 2 tham số dạng hàm là resolve() và reject().
// 1. new Promise
// 2. Executor
var promise = new Promise(
  // Executor
  function (resolve, reject) {
    // Logic
    // Thành công: resolve()
    // Thất bại: reject()

    // Fake call API
    resolve([
      {
        id: 1,
        name: "JavaScript",
      },
    ]);
    // reject('Có lỗi!');
  }
);
promise
  .then(function (courses) {
    //Thực thi khi resolve() được gọi
    console.log(courses);
  })
  .catch(function (error) {
    // Thực thi khi reject() được gọi
    console.log(error);
  })
  .finally(function () {
    // Thực thi khi 1 trong 2 được gọi
    console.log("Done!");
  });
