# Todo-react-reactToolkit

## 样式展示

![image-20220525212900361](http://i0.hdslb.com/bfs/album/42edea1d033039d6d33e06938e0925b9f9ba89fa.png)

使用 `React/ReactDom` 制作的 `todo-list` 待办事项。
使用 `@reduxjs/toolkit` 状态管理
vite`创建 样式使用`tailwind.css` 创建

## 脚本

进入项目路径后,首先安装项目依赖

```sh
pnpm i
```

- 开发测试

开发模式下运行应用，打开浏览器访问 [http://localhost:3000](http://localhost:3000/)

```sh
pnpm dev
```

- 打包构建

将使用 `vite` 打包项目，打包路径在 `dist` 文件夹

```sh
pnpm build
```

- docker 部署
  默认暴露端口在 `4000` 如需服务器部署请修改 `docker-compose.yml` 文件中的 `4000` 端口为自己指定所需

```sh
docker-compose up -d
```

## 说明

两种写法，一个是函数式组件，还有一个类组件

**组件结构**

![image-20220529145524251](http://i0.hdslb.com/bfs/album/db1f45362d6c7ea2b1a6430a5add5ea8d719fdff.png)

### 文件结构

```txt
├── components
│   ├── AddIcon.jsx   # 图标组件
│   ├── Footer.jsx  # 底部组件
│   ├── Header.jsx  # 头部输入组件
│   ├── ListItem.jsx  # 列表组件ian
│   └── ToDo.jsx  # 包装组件
├── favicon.svg
├── index.css # 引入tailwind样式
├── main.jsx  # 整合挂载到页面
└── slices
    ├── store.js  # 创建store
    └── todoSlice.js # 创建slice文件

```
