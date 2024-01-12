const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const filterDuplicateImages = require('./filterDuplicateImages')

// Thay đổi giá trị này thành một tập hợp lưu trữ thực tế (ví dụ: cơ sở dữ liệu) của các API key hợp lệ
const validApiKeys = new Set(['12345', 'abcd1234']);



const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.get('API-KEY');

  if (!apiKey || !validApiKeys.has(apiKey)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Nếu API key hợp lệ, tiếp tục xử lý
  next();
};


app.use(apiKeyMiddleware);
app.use(bodyParser.json());
app.use('/api/detect',filterDuplicateImages)
// Sử dụng middleware cho mọi route cần kiểm tra API key
// Các route khác của ứng dụng
app.get('/auth/current-user', (req, res) => {
  res.json({ message: 'This route is protected with an API key.' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
