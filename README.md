# 我的个人博客

这是我的个人博客网站，使用 [Docusaurus](https://docusaurus.io/) 构建，一个现代化的静态网站生成器。

### 在线访问

博客已部署在 Vercel 上，访问地址：[https://caijiale.vercel.app/](https://caijiale.vercel.app/)

### 安装

```bash
npm install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
