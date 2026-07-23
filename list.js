const axios = require('axios');
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { user } = req.query;
  if (!user) return res.status(400).json({msg:'缺少用户主页链接'});
  try {
    const target = `https://api.douyin.wtf/user?url=${encodeURIComponent(user)}`;
    const { data } = await axios.get(target);
    res.json(data);
  } catch (err) {
    res.status(500).json({msg:'获取作品失败', error: err.message});
  }
};
