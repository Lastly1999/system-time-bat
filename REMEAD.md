# 使用方式

## 安装Node.js依赖
```cmd
yarn 安装依赖
yarn start 开发模式下启动
yarn run pkg 打包二进制文件
```

## 设置更新系统时间 在项目下 auto_time.js -> main方法
```javascript
// 示例：一分钟执行设置就设置第一个 '1 * * * * * *'
// 时间区间在 0 ~ 59 从左到右边分别表示为 秒 分 时 日 年
cron.schedule('59 * * * * *', () => {
 // 每59秒执行一次定时任务
})
```

## 注册为windows服务 ！！最好注册成windows服务
## 打开cmd ！管理员运行
```cmd
sc create ceshi binpath=打包后的exe文件地址 type= own start=auto displayname=显示的服务名称
```