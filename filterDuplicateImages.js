const express = require("express");
const paramSchema = require("./models/params");
const router = express.Router();

router.post("/", (req, res) => {
    const { error } = paramSchema.validate(req.body);
    console.log("🚀 ~ router.get ~ req.body:", req.body.action_id)
    if (error) {
      console.log("🚀 ~ router.get ~ error:", error)
      // Trả về lỗi nếu kiểu dữ liệu không đúng
      res.status(400).json({ error: error.details[0].message });
      // res.status(400).json({ error: "action_id" });
    } else {
      // Logic xử lý khi dữ liệu hợp lệ
      res.json({message: 'Succeed!'});
    }
});

module.exports = router;
