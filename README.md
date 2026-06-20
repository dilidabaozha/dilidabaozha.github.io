# YouTube Style Video Showcase

一个基于YouTube风格的视频展示网站，采用纯HTML、CSS和JavaScript构建，无需依赖任何前端框架。

## 项目简介

本项目模仿YouTube的经典设计风格，提供了一个完整的视频展示平台界面框架，包括：

- 响应式布局设计
- YouTube标志性深色主题
- 完整的导航系统
- 视频卡片展示
- 分类浏览功能
- 横向滚动互动效果
- 丰富的交互效果

## 技术栈

- **HTML5** - 语义化标签结构
- **CSS3** - 现代CSS特性（Grid、Flexbox、动画）
- **JavaScript (ES6+)** - 交互功能实现
- **Font Awesome** - 图标库

## 项目结构

```
dilidabaozha.github.io/
├── index.html      # 主页面结构
├── style.css       # 样式文件
├── script.js       # 交互脚本
├── README.md       # 项目说明文档
└── CNAME          # 域名配置
```

## 功能特性

### 页面布局
- **左侧边栏**：包含logo、快捷导航菜单、上传按钮
- **顶部导航栏**：包含分类导航、搜索框
- **主内容区**：Hero横幅和视频推荐网格
- **分类区域**：横向滚动的分类标签
- **视频展示区**：网格布局的视频卡片

### 交互功能
- 导航切换高亮效果
- 视频卡片悬停上浮效果
- 搜索功能（支持回车搜索）
- 分类标签横向滚动
- 响应式导航菜单
- 用户功能区交互

### 响应式设计
- 桌面端：完整侧边栏布局
- 平板端：隐藏侧边栏，视频网格调整为3列
- 移动端：单栏布局，优化触摸交互

## 快速开始

### 本地运行

1. 克隆或下载项目到本地
2. 直接用浏览器打开 `index.html` 文件
3. 或使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js serve
npx serve -l 3000

# 使用 PHP
php -S localhost:8000
```

### 部署到GitHub Pages

1. 将项目推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为发布源
4. 访问 `https://username.github.io/repo-name`

## 自定义配置

### 修改主题颜色

在 `style.css` 中修改YouTube主色调：

```css
/* 主色调 */
--youtube-red: #FF0000;
--youtube-dark: #0F0F0F;
--youtube-gray: #272727;
--youtube-light-gray: #3F3F3F;
```

### 修改导航菜单

在 `index.html` 中修改导航链接：

```html
<nav class="sidebar-nav">
    <a class="nav-item active" href="#">
        <i class="fa-solid fa-house"></i>
        首页
    </a>
    <a class="nav-item" href="#">
        <i class="fa-solid fa-video"></i>
        项目视频
    </a>
    <!-- 添加更多导航项 -->
</nav>
```

### 添加视频卡片

在 `index.html` 的视频网格中添加新的卡片：

```html
<div class="video-card">
    <div class="video-thumbnail">
        <img src="your-image-url" alt="视频封面">
        <span class="video-duration">10:35</span>
    </div>
    <div class="video-info">
        <h3 class="video-title">视频标题</h3>
        <div class="video-meta">
            <span class="channel-name">频道名称</span>
            <span class="view-count">12K次观看</span>
            <span class="upload-time">3天前</span>
        </div>
    </div>
</div>
```

## 浏览器兼容性

- Chrome/Edge (推荐)
- Firefox
- Safari
- Opera

## 开发说明

### 代码规范
- 使用语义化HTML标签
- CSS采用BEM命名规范
- JavaScript使用ES6+语法
- 添加适当的代码注释

### 性能优化
- 图片使用懒加载
- CSS动画使用transform和opacity
- JavaScript事件委托
- 响应式图片适配

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub Issues
- Email: your-email@example.com

---

**注意**：本项目仅用于学习和展示目的，不涉及任何商业用途。