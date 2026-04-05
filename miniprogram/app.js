const config = require("./config");

App({
  onLaunch() {
    if (!wx.cloud) {
      console.error("请使用支持云能力的微信基础库");
      return;
    }

    const cloud = new wx.cloud.Cloud({
      resourceAppid: config.resourceAppid,
      resourceEnv: config.envId
    });

    cloud.init();

    this.cloud = cloud;
  },

  globalData: {}
});
