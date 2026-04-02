# 🚀 5分钟部署指南 - gotoorient.com

> **适合技术小白，无需任何服务器知识！**

---

## 第一步：注册 GitHub（5分钟）

GitHub 是代码托管平台，Vercel 会从这里自动获取您的网站代码。

1. 访问 [github.com](https://github.com)
2. 点击右上角 **Sign up** 注册
3. 填写邮箱、密码、用户名
4. 验证邮箱

---

## 第二步：下载项目代码（2分钟）

我会把项目打包给您，您需要：

1. 在 GitHub 创建一个新仓库
   - 点击右上角 **+** → **New repository**
   - Repository name 填写：`discover-china`
   - 选择 **Public**（公开）
   - 点击 **Create repository**

2. 上传代码文件
   - 我会提供下载链接
   - 下载后解压
   - 把所有文件上传到 GitHub 仓库

---

## 第三步：注册 Vercel（2分钟）

Vercel 是部署平台，会自动帮您发布网站。

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **Sign Up** → 选择 **Continue with GitHub**
3. 授权 Vercel 访问您的 GitHub

---

## 第四步：一键部署（1分钟）

1. 登录 Vercel 后，点击 **Add New...** → **Project**
2. 选择您的 `discover-china` 仓库
3. 点击 **Import**
4. 直接点击 **Deploy**（无需任何配置）
5. 等待 1-2 分钟，显示 🎉 就成功了！

---

## 第五步：绑定域名 gotoorient.com（3分钟）

### 5.1 在 Vercel 添加域名

1. 部署成功后，进入项目页面
2. 点击 **Settings** → **Domains**
3. 输入 `gotoorient.com`，点击 **Add**
4. 同时添加 `www.gotoorient.com`

### 5.2 修改域名 DNS 解析

您需要在购买域名的地方（如 GoDaddy、Namecheap、阿里云等）修改 DNS：

| 类型 | 名称 | 值 |
|------|------|------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**具体操作**（以 GoDaddy 为例）：
1. 登录 GoDaddy
2. 进入 **My Products** → 找到 gotoorient.com
3. 点击 **DNS**
4. 删除现有的 A 记录和 CNAME 记录
5. 添加上面两条新记录

### 5.3 等待生效

- DNS 生效需要 5分钟~48小时（通常 10 分钟内）
- 生效后访问 **https://gotoorient.com** 即可看到您的网站！

---

## 🎉 完成！

您的网站已经：
- ✅ 自动配置 HTTPS（安全锁）
- ✅ 全球 CDN 加速（欧美访问快）
- ✅ 自动更新（改代码自动部署）

---

## 🔄 后续如何更新网站？

1. 在 GitHub 仓库中修改文件
2. Vercel 会自动检测并重新部署
3. 1-2 分钟后网站自动更新

---

## ❓ 常见问题

### Q: 部署失败怎么办？
A: 检查 GitHub 仓库是否上传了所有文件

### Q: 域名无法访问？
A: DNS 需要时间生效，耐心等待 10-30 分钟

### Q: 想修改网站内容？
A: 联系我，我帮您修改代码，然后推送到 GitHub

---

## 📞 需要帮助？

如果在任何步骤遇到问题，告诉我具体卡在哪一步，我来帮您！
