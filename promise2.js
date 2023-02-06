var sleep = function (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
};

sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    // return sleep(1000);
    return new Promise(function (resolve, reject) {
      reject("Có lỗi!");
    });
  })
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .catch(function (err) {
    console.log(err);
  });

// Promise.resolve - Dùng khi tạo 1 promise luôn thành công
// Promise.reject -  Dùng khi tạo 1 promise luôn thất bại
var promise1 = Promise.resolve("Result");
promise1
  .then(function (result) {
    console.log("result: ", result);
  })
  .catch(function (err) {
    console.log("error: ", err);
  });

// Promise.all
var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});
var promise3 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});
// => Mất 7s để thực hiện xong 2 promise trên, tuy nhiên do 2 promise trên không sử dụng dữ liệu liên quan đến nhau nên ta có thể hợp nhất lại tránh lãng phí thời gian của ứng dụng, thời gian sẽ bằng thời gian của promise chạy lâu nhất (như ở đây là 5s)
// Khi có 1 promise bị lỗi thì sẽ lọt luôn vào catch
Promise.all([promise2, promise3])
  .then(function (result) {
    // console.log(result);
    var result1 = result[0];
    var result2 = result[1];
    console.log(result1.concat(result2));
  })
  .catch(function (err) {
    console.log(err);
  });
