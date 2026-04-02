# Discover China - 中国旅游指南网站

## 项目概述

面向欧美游客的中国旅游目的地推荐网站，提供城市攻略、景点介绍、美食推荐以及 AI 智能路书生成功能。

### 核心功能

1. **首页** - 精选城市展示、搜索功能、广告位
2. **城市列表页** - 所有城市展示，支持按区域筛选
3. **城市详情页** - 攻略、特色、景点、美食推荐
4. **路书生成** - AI 智能生成个性化图文行程单
5. **广告位系统** - 多位置广告位预留

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **AI**: coze-coding-dev-sdk (LLM 流式生成)

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── itinerary/route.ts    # 路书生成 API
│   │   ├── cities/
│   │   │   ├── page.tsx             # 城市列表页
│   │   │   └── [slug]/page.tsx      # 城市详情页
│   │   ├── itinerary/
│   │   │   └── page.tsx             # 路书生成页
│   │   ├── layout.tsx               # 全局布局
│   │   ├── page.tsx                 # 首页
│   │   └── globals.css              # 全局样式
│   ├── components/ui/               # Shadcn UI 组件库
│   ├── hooks/                       # 自定义 Hooks
│   └── lib/
│       ├── cities-data.ts           # 城市数据
│       ├── types.ts                 # 类型定义
│       └── utils.ts                 # 工具函数
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

- **项目理解加速**：初始可以依赖项目下 `package.json` 文件理解项目类型
- **Hydration 错误预防**：严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染

## UI 设计与组件规范

- 项目预装 shadcn/ui 组件库，位于 `src/components/ui/` 目录下
- 必须默认采用 shadcn/ui 组件、风格和规范

## 数据结构

### 城市数据 (City)
- `id`: 城市唯一标识
- `name` / `nameZh`: 英文名 / 中文名
- `slug`: URL 友好标识
- `description`: 城市描述
- `region`: 所属区域
- `image` / `bannerImage`: 封面图 / 横幅图
- `rating`: 评分
- `bestTimeToVisit`: 最佳旅游时间
- `avgBudget`: 平均预算
- `highlights`: 亮点列表
- `attractions`: 景点数组
- `localFoods`: 当地美食数组
- `travelTips`: 旅行贴士

### 景点数据 (Attraction)
- `id`, `name`, `description`, `image`
- `rating`: 评分
- `duration`: 游览时长
- `ticket`: 门票价格
- `tips`: 游览提示

## API 接口

### POST /api/itinerary
生成个性化旅游路书

**请求参数**:
```json
{
  "cityId": "beijing",
  "days": 3,
  "interests": "history, culture",
  "budget": "moderate",
  "travelStyle": "balanced"
}
```

**响应**: Server-Sent Events (SSE) 流式输出 JSON 格式的行程单

## 广告位位置

1. **首页中部横幅** - 全宽广告横幅
2. **首页底部三栏** - 左侧内容 + 右侧广告
3. **城市列表页底部** - 横幅广告
4. **城市详情页侧边栏** - 卡片式广告
5. **路书生成页侧边栏** - 卡片式广告

## 构建与部署

```bash
# 开发环境
pnpm dev

# 构建
pnpm build

# 生产环境
pnpm start
```

## 注意事项

- 所有页面使用英文内容，面向欧美游客
- AI 路书生成使用 SSE 流式输出，前端支持实时渲染
- 城市数据目前包含：北京、上海、西安、成都、桂林、杭州
- 图片使用 Unsplash 外链，生产环境建议替换为 CDN 资源
