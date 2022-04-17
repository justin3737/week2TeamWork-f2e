# week2TeamWork f2e

### 使用說明
- 查看列表 list.html
- 建立貼文 createPost.html
### Developer 開發說明
兩種獲取後端API 的方式
- 使用heroku api
- 使用Node.js + MongoDB 在本地端運行，請使用此 [github](https://github.com/larrylinr5/week2TeamWork
)


```
在 js/http.js 做切換

/** 使用heroku api */
const http = 'https://lit-headland-53855.herokuapp.com/ArticleList'

/** 使用Node.js + MongoDB 在本地端運行 */
//const http = 'http://127.0.0.1:3005/ArticleList'
```

### 功能一：取得貼文列表頁
![](image/list.png)

### 功能二：新增貼文頁
![](image/post.png)
