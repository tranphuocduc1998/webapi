// Khai báo thư viện json server
const jsonServer = require('json-server');

// Khai báo điều hướng đến tập tin lưu dữ liệu
const router = jsonServer.router('db.json');

// Khởi tạo website API
const server = jsonServer.create();

// Khai báo cấu hình cho website API
const middlewares = jsonServer.defaults();
 
// Cấu hình khai báo vào website API
server.use(middlewares);
server.use(router);

// Khởi chạy website API
server.listen(process.env.PORT || 3000, () => {
  console.log(`Khởi chạy website API với port ${process.env.PORT || 3000} thành công`);
});