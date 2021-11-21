const { httpGet } = require("./mock-http-interface");

function addressQuotes(url) {
  return httpGet(url).then((result) => {
    if (result.status == 200) {
      return {
        "Arnie Quote": JSON.parse(result.body).message,
      };
    } else {
      return {
        FAILURE: JSON.parse(result.body).message,
      };
    }
  });
}

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  return Promise.all(urls.map((url) => addressQuotes(url)));
};
module.exports = {
  getArnieQuotes,
};
