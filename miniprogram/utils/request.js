const config = require("../config");

function request(path, options = {}) {
  const { method = "GET", data, header } = options;

  return new Promise((resolve, reject) => {
    wx.request({
      url: `${config.baseUrl}${path}`,
      method,
      data,
      header,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
          return;
        }

        reject(new Error(`Request failed: ${res.statusCode}`));
      },
      fail: reject
    });
  });
}

module.exports = {
  request,
  baseUrl: config.baseUrl
};
