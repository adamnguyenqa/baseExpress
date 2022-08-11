const axios = require("axios").default;

module.exports = async (req, res) => {
  const { tokenAddress } = req.params;

  const result = await axios.get(
    `https://api.pancakeswap.info/api/v2/tokens/${tokenAddress}`
  );

  const { data } = result.data;

  return res.json({ statusCode: 200, data });
};
