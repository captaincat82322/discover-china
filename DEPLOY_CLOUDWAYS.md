# Cloudways 部署指南 - Discover China

## 前置准备

- Cloudways 账号
- 已购买的服务器
- 域名已解析到服务器 IP

---

## 步骤 1：SSH 连接服务器

在 Cloudways 控制台获取 SSH 凭据：
```
ssh username@your-server-ip -p 你的端口
```

## 步骤 2：安装 Node.js 和 PM2

```bash
# 更新系统
sudo apt update

# 安装 Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 安装 pnpm
npm install -g pnpm

# 安装 PM2（进程管理器）
npm install -g pm2
```

## 步骤 3：上传项目代码

### 方法 A：使用 Git（推荐）

```bash
# 在服务器上克隆代码
cd /var/www/html
git clone 你的仓库地址 discover-china
cd discover-china
```

### 方法 B：使用 SFTP 上传

使用 FileZilla 或其他 FTP 工具，将以下文件上传到服务器：
- 整个项目目录

## 步骤 4：安装依赖并构建

```bash
cd /var/www/html/discover-china

# 安装依赖
pnpm install

# 构建项目
pnpm build
```

## 步骤 5：使用 PM2 启动服务

```bash
# 启动服务
pm2 start pnpm --name "discover-china" -- start

# 查看运行状态
pm2 status

# 设置开机自启
pm2 startup
pm2 save
```

## 步骤 6：配置 Nginx 反向代理

Cloudways 默认使用 Nginx，需要配置反向代理：

```bash
# 编辑 Nginx 配置
sudo nano /etc/nginx/sites-available/discover-china
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

启用配置：
```bash
sudo ln -s /etc/nginx/sites-available/discover-china /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 步骤 7：配置 SSL 证书

使用 Let's Encrypt 免费证书：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 自动续期
sudo certbot renew --dry-run
```

## 步骤 8：环境变量配置

创建环境变量文件：

```bash
nano /var/www/html/discover-china/.env
```

添加必要的环境变量：
```
NODE_ENV=production
PORT=5000
```

---

## 常用命令

```bash
# 查看应用状态
pm2 status

# 查看日志
pm2 logs discover-china

# 重启应用
pm2 restart discover-china

# 停止应用
pm2 stop discover-china
```

---

## 更新部署

当代码更新后：

```bash
cd /var/www/html/discover-china
git pull
pnpm install
pnpm build
pm2 restart discover-china
```

---

## 注意事项

1. **防火墙设置**：确保 Cloudways 控制台开放了 80 和 443 端口
2. **内存限制**：如果构建失败，可能需要增加 swap 空间
3. **Cloudways 限制**：Cloudways 对自定义应用支持有限，建议使用 VPS

---

## 替代方案（更适合 Node.js）

如果遇到困难，以下平台对 Next.js 支持更好：

| 平台 | 优势 | 价格 |
|------|------|------|
| **Vercel** | Next.js 官方，零配置 | 免费起步 |
| **Railway** | 简单易用，支持自动部署 | $5/月起 |
| **Render** | 免费 SSL，自动 CI/CD | 免费起步 |
| **DigitalOcean App Platform** | 一键部署 | $5/月起 |
