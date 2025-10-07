@echo off

REM 五十音图默写网站 - GitHub部署辅助脚本
REM 使用说明：
REM 1. 确保已安装Git
REM 2. 确保已在GitHub上创建了仓库
REM 3. 双击运行此脚本
REM 4. 按照提示输入您的GitHub用户名和仓库名

echo =====================================================
echo 五十音图默写网站 - GitHub部署辅助脚本
echo =====================================================
echo 

echo 首先，请确保您已经在GitHub上创建了一个新的仓库。
echo 

REM 获取GitHub用户名和仓库名
set /p github_username=请输入您的GitHub用户名: 
set /p github_repository=请输入您的GitHub仓库名: 

echo 

echo 正在初始化Git仓库...
git init

echo 

echo 正在添加所有文件...
git add .

echo 

echo 正在提交更改...
git commit -m "Initial commit"

echo 

echo 正在连接到GitHub仓库...
git remote add origin https://github.com/%github_username%/%github_repository%.git

echo 

echo 正在推送到GitHub...
git push -u origin master

echo 

echo =====================================================
echo 部署命令执行完成！
echo =====================================================
echo 
echo 下一步操作：
echo 1. 登录您的GitHub账号，进入刚刚创建的仓库

echo 2. 点击"Settings"选项卡

echo 3. 在左侧菜单中点击"Pages"

echo 4. 在"Source"部分，从"None"下拉菜单中选择"master"或"main"分支

echo 5. 选择根目录（"/ (root)"）

echo 6. 点击"Save"

echo 
echo 部署完成后，您的网站将可以通过以下URL访问：
echo https://%github_username%.github.io/%github_repository%/
echo 
echo 注意：首次部署可能需要几分钟时间才能生效。
echo 

pause