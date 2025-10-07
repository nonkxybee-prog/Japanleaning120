# 五十音图默写练习打印工具

这是一个帮助学习日语五十音图的在线工具，可以生成各种格式的默写练习表，方便打印和练习。

## 功能特点

- **多种纸张大小**：支持A4标准大小和3寸宽度两种规格
- **多种翻译类型**：支持平假名↔罗马音和片假名↔罗马音互译练习
- **排序选项**：可以选择标准顺序或随机打乱顺序
- **自定义行数和单词数**：可以根据需要调整练习表的行数和单词个数
- **预览功能**：生成练习表后可以先预览效果
- **打印和下载**：支持直接打印或下载为PDF文件

## 使用方法

1. 在浏览器中打开网站
2. 选择您需要的纸张大小（A4或3寸宽度）
3. 选择翻译类型（平假名↔罗马音或片假名↔罗马音）
4. 选择排序方式（标准顺序或随机排序）
5. 输入您需要的行数和单词个数
6. 点击"生成练习表"按钮
7. 预览生成的练习表
8. 点击"打印/下载"按钮进行打印或保存为PDF文件

## 技术实现

- **HTML5**：网站的基本结构
- **Tailwind CSS**：用于快速构建现代化UI
- **Font Awesome**：提供图标支持
- **JavaScript**：实现交互功能和练习表生成逻辑

## 浏览器兼容性

本工具在以下浏览器中测试通过：

- Google Chrome（推荐）
- Mozilla Firefox
- Microsoft Edge
- Safari

## 在GitHub上部署网站

要将此网站部署到GitHub Pages，请按照以下步骤操作：

### 前提条件
- 安装了Git
- 有GitHub账号

### 步骤1：创建GitHub仓库

1. 登录您的GitHub账号
2. 点击右上角的"+"按钮，选择"New repository"
3. 输入仓库名称（例如：japanese-character-practice）
4. 选择仓库可见性（公开或私有）
5. 点击"Create repository"

### 步骤2：将项目推送到GitHub

这些命令需要在**命令行工具**中输入。在Windows系统中，您可以使用以下几种命令行工具：

1. **Git Bash**：安装Git时自带的命令行工具（推荐）
2. **Windows PowerShell**：Windows系统内置的高级命令行工具
3. **命令提示符(cmd.exe)**：Windows系统的传统命令行工具

#### 操作步骤：

1. **打开命令行工具**
   - 如果使用Git Bash：在开始菜单中搜索并打开"Git Bash"
   - 如果使用PowerShell：在开始菜单中搜索并打开"Windows PowerShell"
   - 如果使用命令提示符：在开始菜单中搜索并打开"命令提示符"

2. **导航到项目文件夹**
   在命令行中输入以下命令（将路径替换为您的实际项目路径）：
   ```bash
   cd f:\cn编程软件\五十音图默写打印网站
   ```
   （提示：输入`cd `后，可以直接拖放项目文件夹到命令行窗口，自动填充路径）

3. **执行以下Git命令**
   ```bash
   # 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 连接到GitHub仓库（将YOUR_USERNAME和YOUR_REPOSITORY替换为您的GitHub用户名和仓库名）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

# 推送到GitHub
git push -u origin master
```

### 简化部署方法（可选）

我为您创建了一个Windows批处理文件，可以帮助您更方便地执行上述命令：

1. 在项目文件夹中找到 `deploy-github.bat` 文件
2. 双击运行该文件
3. 按照提示输入您的GitHub用户名和仓库名
4. 脚本将自动执行所有必要的Git命令

**注意**：运行批处理文件前，请确保已经在GitHub上创建了仓库。

### 步骤3：启用GitHub Pages

1. 进入您的GitHub仓库页面
2. 点击"Settings"选项卡
3. 在左侧菜单中点击"Pages"
4. 在"Source"部分，从"None"下拉菜单中选择"master"或"main"分支
5. 选择根目录（"/ (root)"）
6. 点击"Save"

### 步骤4：访问已部署的网站

- 部署完成后，您可以通过GitHub Pages提供的URL访问您的网站
- 通常URL格式为：https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
- 注意：首次部署可能需要几分钟时间才能生效

## 注意事项

- 为了获得最佳的打印效果，建议使用Chrome浏览器
- 下载功能通过浏览器的打印对话框实现，选择"另存为PDF"即可将练习表保存为PDF文件
- 如果需要更多自定义选项，可以修改源代码中的相关参数

## 版权信息

本工具仅供学习使用，请勿用于商业目的。

© 2023 五十音图默写练习打印工具