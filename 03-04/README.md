# 3-4 使用 Loader 打包静态资源（样式篇 - 下）

|本期版本|上期版本
|:---:|:---:
`Thu Dec  5 20:22:14 CST 2024` | `Tue Mar 28 15:23:18 CST 2023`


> css 打包模块化

```javascript
// modules: true

import style from './index.scss'

img.classList.add(style.avatar)
```

## Ref

* [`importLoaders`](https://github.com/webpack-contrib/css-loader#importloaders)
* [`modules`](https://github.com/webpack-contrib/css-loader#modules): `.css`、 `. module.css`