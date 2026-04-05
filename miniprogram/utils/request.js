const config = require("../config");

function request(path, options = {}) {
  const { method = "GET", data, header } = options;

  return wx.cloud.callContainer({
    config: {
      env: config.envId
    },
    path,
    method,
    header: {
      "X-WX-SERVICE": config.service,
      ...header
    },
    data
  }).then((res) => {
    if (res.errMsg === "cloud.callContainer:ok") {
      return res.data;
    }

    throw new Error(res.errMsg || "请求失败");
  });
}

module.exports = {
  request,
  envId: config.envId,
  service: config.service
};
