## 使用介绍

1. vscode 扩展搜索“thdeploy”，下载安装 （或git仓库中下载对应vsix文件安装）。  
  > vscode -> 扩展 -> 更多（...）-> 从VSIX安装   
2. 在工作区根路径下添加 deploy.config.js 文件   
3. 配置项目如下  

```javascript


const config = {
  test: {
    host: '0.0.0.0', // 服务器地址
    username: 'username', // 登录用户名
    password: 'password', // 登录密码
    remotePath: '/root/www/admin', // 服务器目录
    build: 'yarn test', // 构建命令
    distPath: 'dist', // 打包输出目录
};

module.exports = config;
```
