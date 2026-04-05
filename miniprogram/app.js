App({
  onLaunch() {
    if (!wx.cloud) {
      console.error("请使用支持云能力的微信基础库");
      return;
    }

    wx.cloud.init({
      env: "prod-9gu5ao5ce86ae652"
    });
  },

  globalData: {}
});
