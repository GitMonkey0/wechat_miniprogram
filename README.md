# 最小微信小程序项目

这个目录包含两个部分：

- `miniprogram/`：微信开发者工具直接打开和调试的小程序前端
- `server/`：可部署到微信云托管的最小 Node.js 后端

## 前端

1. 用微信开发者工具打开当前目录。
2. 如果你还没有正式 `appid`，可以先用 `touristappid` 体验。
3. 修改 `miniprogram/config.js` 里的 `baseUrl`，填成你云托管服务的 HTTPS 域名。
4. 在小程序管理后台把这个域名加入 `request 合法域名`。

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

- `3000`

可用接口：

- `GET /`：基础状态
- `GET /api/health`：健康检查
- `POST /api/echo`：回显请求体

## 部署到微信云托管

1. 在微信云开发控制台创建云托管服务。
2. 以 `server/` 目录作为后端代码目录部署。
3. 使用仓库上传或本地上传时，保留 `server/Dockerfile`。
4. 部署成功后，复制云托管给出的 HTTPS 域名。
5. 把这个域名填回 `miniprogram/config.js` 的 `baseUrl`。

云托管会注入 `PORT` 环境变量，这个示例已经兼容。
