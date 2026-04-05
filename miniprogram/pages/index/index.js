const { request, envId, service } = require("../../utils/request");

Page({
  data: {
    envId,
    service,
    loading: false,
    result: null,
    resultText: "",
    error: ""
  },

  onLoad() {
    this.checkBackend();
  },

  checkBackend() {
    this.setData({
      loading: true,
      error: ""
    });

    request("/api/health")
      .then((result) => {
        this.setData({
          result,
          resultText: JSON.stringify(result, null, 2)
        });
      })
      .catch((error) => {
        this.setData({
          result: null,
          resultText: "",
          error: error.message || "请求失败"
        });
      })
      .finally(() => {
        this.setData({
          loading: false
        });
      });
  }
});
