const axios = require("axios").default;

module.exports = async (req, res) => {
  const result = await axios.get(`https://api.pancakeswap.info/api/v2/tokens`);

  const { data } = result.data;

  return res.json({
    statusCode: 200,
    message: "Top 1000 pars on PancakeSwap",
    data,
  });
};
