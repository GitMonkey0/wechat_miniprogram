# 最小微信小程序项目

这个目录包含两个部分：

- `miniprogram/`：微信开发者工具直接打开和调试的小程序前端
- `server/`：可部署到微信云托管的最小 Node.js 后端

## 前端

1. 用微信开发者工具打开当前目录。
2. `appid` 已配置为 `wx8e2f19a4db909592`。
3. 确认 `miniprogram/config.js` 中的 `envId` 和 `service` 与你的云托管一致。
4. 当前示例通过 `wx.cloud.callContainer` 调用云托管，不需要配置 `request 合法域名`。

页面启动后会请求：

- `GET /api/health`

## 后端

本地运行：

```bash
cd server
npm install
npm run start
```

本地默认端口：

- `80`

可用接口：

- `GET /`：基础状态
- `GET /api/health`：健康检查
- `POST /api/echo`：回显请求体

## 部署到微信云托管

1. 在微信云开发控制台创建云托管服务。
2. 以 `server/` 目录作为后端代码目录部署。
3. 使用仓库上传或本地上传时，保留 `server/Dockerfile`。
4. 部署成功后，确认服务名为 `lht-server`，环境 ID 为你的云开发环境 ID。
5. 把这些信息填回 `miniprogram/config.js`。

云托管会注入 `PORT` 环境变量，这个示例已经兼容；未注入时默认监听 `80` 端口。
