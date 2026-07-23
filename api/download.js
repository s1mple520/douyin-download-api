const axios = require('axios');
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req.query;
  if (!url) return res.status(400).json({msg:'缺少抖音视频链接'});
  try {
    const target = `https://api.douyin.wtf/api?url=${encodeURIComponent(url)}`;
    const { data } = await axios.get(target);
    res.json(data);
  } catch (err) {
    res.status(500).json({msg:'解析失败', error: err.message});
  }
};
