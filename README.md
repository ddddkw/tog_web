简体中文 | [English](./README.md)

### 项目简介
vue3+springboot创建的一个简易的博客网站，会在里面不断地尝试一些个人认为比较新奇的玩法，对应的后端项目为tog_boot

### 特性

- 支持暗黑模式
- 自定义主题颜色
- 多种空间布局

### 使用
### 开发

``` bash
## 安装依赖
npm install

## 启动项目
npm run dev
```

### 各级目录分层结构（src目录）

### 构建

```bash
## 构建正式环境
npm run build

## 构建测试环境
npm run build:test
```

### 其他

```bash
## 预览构建产物
npm run preview

## 代码格式检查
npm run lint

## 代码格式检查与自动修复
npm run lint:fix

## style格式检查
npm run stylelint

## style格式检查与自动修复
npm run stylelint:fix
```
## commit规范
Bug 修复-fix(组件名): 修复描述
功能添加-feat(组件名): 新增功能描述
性能优化-perf(组件名): 性能优化描述
代码重构-refactor(组件名): 重构描述
文档更新-docs(组件名): 文档更新描述
测试添加或修改 -test(组件名): 测试添加或修改描述
配置或工具修改 -chore(组件名): 配置或工具修改描述
移除功能 -remove(组件名): 移除功能描述
其他：对于一些无法明确分类的变更，你可以使用以下模板
misc: 其他描述
临时回退更改：如果你需要临时回退某个更改，可以使用以下模板
revert: 回退描述
