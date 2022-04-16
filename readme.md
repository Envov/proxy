
![iShot2022-04-14_17.03.39.png](https://s2.loli.net/2022/04/14/zREjdyInqBxaFfs.png)


### 安装
```shell
npm install @envov/proxy -g 
```

### 1、在任意位置创建任意文件，例如：
```shell
touch ./proxy.ini
```
### 2、在里面写入转发规则

```ini

[:888/typicode]
target=https://jsonplaceholder.typicode.com
# 将https://jsonplaceholder.typicode.com 代理到 http://127.0.0.1:888/typicode

[:999/test]
target=https://jsonplaceholder.typicode.com/posts/1
# 将https://jsonplaceholder.typicode.com/posts/1 代理到 http://127.0.0.1:999/test

[:888]
target=https://jsonplaceholder.typicode.com/posts/1
# 将https://jsonplaceholder.typicode.com/posts/1 代理到 http://127.0.0.1:888
```

### 3、开启代理
```shell
proxy ./proxy.ini
```


### 其他
**proxy命令使用配置文件的权重依次是：**

*  **优先：proxy 命令传入的配置文件地址**
*  **其次：proxy 命令执行目录下的名字为 proxy.ini 的配置文件**
*  **最低：~/proxy.ini 配置文件**
