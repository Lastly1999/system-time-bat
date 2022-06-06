# 注册服务windows系统服务

## 使用方式

### 打开cmd ！管理员运行
```cmd
sc create ceshi binpath=打包后的exe文件地址 type= own start=auto displayname=显示的服务名称
```