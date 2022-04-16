
![iShot2022-04-14_17.03.39.png](https://s2.loli.net/2022/04/14/zREjdyInqBxaFfs.png)


### install 
```shell
npm install @envov/proxy -g 
```

### 1、Create any file in anywhere, for example:
```shell
touch ./proxy.ini
```
### 2、 Simple rules in it

```ini

[:888/typicode]
target=https://jsonplaceholder.typicode.com
# proxy https://jsonplaceholder.typicode.com on http://127.0.0.1:888/typicode

[:999/test]
target=https://jsonplaceholder.typicode.com/posts/1
# proxy https://jsonplaceholder.typicode.com/posts/1 on http://127.0.0.1:999/test

[:888]
target=https://jsonplaceholder.typicode.com/posts/1
# proxy https://jsonplaceholder.typicode.com/posts/1 on http://127.0.0.1:888
```

### 3、proxy <configuration-file>
```shell
proxy ./proxy.ini
```


### others
**The weight of the  configuration file is：**

*  **first：proxy configuration-file.int **
*  **second：proxy.ini file under proxy command directory**
*  **third：~/proxy.ini **
